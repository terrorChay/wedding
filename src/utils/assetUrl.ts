/** Public asset path prefixed with Vite `base` (root `/` for custom domains). */
export function assetUrl(path: string): string {
  const normalized = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}
