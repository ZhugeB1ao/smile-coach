const images = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

export function getImage(filename) {
  if (!filename) return '';
  if (filename.startsWith('http') || filename.startsWith('data:')) return filename;

  for (const [path, url] of Object.entries(images)) {
    if (path.endsWith(`/${filename}`) || path.endsWith(filename)) {
      return url;
    }
  }
  return '';
}

export default images;
