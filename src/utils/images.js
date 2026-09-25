const images = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

export function getImage(filename) {
  if (!filename) return '';
  if (filename.startsWith('http') || filename.startsWith('data:')) return filename;

  // 1. Direct match
  for (const [path, url] of Object.entries(images)) {
    if (path.endsWith(`/${filename}`) || path.endsWith(filename)) {
      return url;
    }
  }

  // 2. Extension-agnostic match (e.g. requesting .jpg when only .webp is available)
  const baseName = filename.replace(/\.[^/.]+$/, '');
  for (const [path, url] of Object.entries(images)) {
    if (path.includes(`/${baseName}.`)) {
      return url;
    }
  }

  return '';
}

export default images;
