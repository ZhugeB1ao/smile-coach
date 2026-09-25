import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  console.log('🚀 [SSG] Bắt đầu tạo Static Site Generation (SSG)...');

  // 1. Build Client Bundle
  console.log('📦 [SSG] Bước 1/3: Đang đóng gói Client bundle...');
  await build({
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
  });

  // 2. Build Server/SSR Bundle
  console.log('⚙️  [SSG] Bước 2/3: Đang đóng gói Server bundle...');
  await build({
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: 'dist/ssr',
      emptyOutDir: true,
    },
  });

  // 3. Render HTML
  console.log('✨ [SSG] Bước 3/3: Đang render static HTML và tiêm vào index.html...');
  const ssrEntryPath = path.resolve(__dirname, 'dist/ssr/entry-server.js');
  const { render } = await import(pathToFileURL(ssrEntryPath).href);

  // Đọc file index.html được sinh ra từ client build
  const templatePath = path.resolve(__dirname, 'dist/index.html');
  let template = fs.readFileSync(templatePath, 'utf-8');

  // Tìm file CSS trong dist/assets để inline trực tiếp vào <head> loại bỏ FOUC
  const assetsDir = path.resolve(__dirname, 'dist/assets');
  const cssFiles = fs.readdirSync(assetsDir).filter((file) => file.endsWith('.css'));
  let inlinedCss = '';
  for (const cssFile of cssFiles) {
    const cssPath = path.join(assetsDir, cssFile);
    inlinedCss += fs.readFileSync(cssPath, 'utf-8');
  }

  // Render React App thành chuỗi HTML hoàn chỉnh
  const { html: rawAppHtml } = render();

  // Trích xuất các thẻ preload (như ảnh Hero) được React 19 sinh ra trong #root để đưa lên <head>
  const preloadMatches = rawAppHtml.match(/<link rel="preload"[^>]*>/g) || [];
  const cleanAppHtml = rawAppHtml.replace(/<link rel="preload"[^>]*>/g, '');
  const headPreloads = preloadMatches.join('\n    ');

  // 1. Loại bỏ thẻ <link rel="stylesheet"> vì CSS đã được inline 100% trong <style>
  template = template.replace(/<link rel="stylesheet"[^>]+assets\/index-[^>]+>/g, '');

  // 2. Di chuyển thẻ script module từ <head> xuống trước </body> để không chặn render
  const scriptMatch = template.match(/<script type="module"[^>]+src="\/assets\/index-[^>]+><\/script>/);
  if (scriptMatch) {
    template = template.replace(scriptMatch[0], '');
    template = template.replace('</body>', `  ${scriptMatch[0]}\n  </body>`);
  }

  // 3. Đưa <style id="inlined-theme-css"> lên đầu <head> ngay sau <meta charset="UTF-8" />
  if (inlinedCss) {
    template = template.replace(
      '<meta charset="UTF-8" />',
      `<meta charset="UTF-8" />\n    <style id="inlined-theme-css">\n${inlinedCss}\n    </style>`
    );
  }
  if (headPreloads) {
    template = template.replace('</head>', `    ${headPreloads}\n  </head>`);
  }

  // 4. Thay thế div#root rỗng bằng nội dung HTML đã được render sẵn
  const finalHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${cleanAppHtml}</div>`
  );

  fs.writeFileSync(templatePath, finalHtml, 'utf-8');

  // Dọn dẹp thư mục tạm dist/ssr
  fs.rmSync(path.resolve(__dirname, 'dist/ssr'), { recursive: true, force: true });

  console.log(`✅ [SSG] Hoàn tất! dist/index.html đã được pre-render tĩnh thành công (${(finalHtml.length / 1024).toFixed(1)} KB).`);
}

prerender().catch((err) => {
  console.error('❌ [SSG] Lỗi trong quá trình pre-render:', err);
  process.exit(1);
});
