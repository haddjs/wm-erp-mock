import { apiFetch } from "./api";

export async function getCategories() {
  const res = await apiFetch("/categories");
  return res.data;
}
