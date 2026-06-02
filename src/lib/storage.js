const SUPABASE_STORAGE_URL =
  "https://cmksgbpzjakscqzqutja.supabase.co/storage/v1/object/public/portfolio-assets";

export const storageImageUrl = (path) => {
  if (!path) return "";

  return `${SUPABASE_STORAGE_URL}/${path.replace(/^\/+/, "")}`;
};
