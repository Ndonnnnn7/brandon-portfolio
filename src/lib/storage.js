const SUPABASE_STORAGE_URL =
  "https://cmksgbpzjakscqzqutja.supabase.co/storage/v1/object/public/portfolio-assets";
const SUPABASE_IMAGE_RENDER_URL =
  "https://cmksgbpzjakscqzqutja.supabase.co/storage/v1/render/image/public/portfolio-assets";

const normalizeStoragePath = (path) => {
  if (!path) return "";

  return path
    .replace(SUPABASE_STORAGE_URL, "")
    .replace(SUPABASE_IMAGE_RENDER_URL, "")
    .split("?")[0]
    .replace(/^\/+/, "");
};

export const storageImageUrl = (path) => {
  if (!path) return "";

  return `${SUPABASE_STORAGE_URL}/${normalizeStoragePath(path)}`;
};

export const storageImageTransformUrl = (
  path,
  { width, height, quality = 75, resize = "contain" } = {}
) => {
  const normalizedPath = normalizeStoragePath(path);
  if (!normalizedPath) return "";

  const params = new URLSearchParams();
  if (width) params.set("width", width);
  if (height) params.set("height", height);
  if (quality) params.set("quality", quality);
  if (resize) params.set("resize", resize);

  const query = params.toString();
  return `${SUPABASE_IMAGE_RENDER_URL}/${normalizedPath}${query ? `?${query}` : ""}`;
};
