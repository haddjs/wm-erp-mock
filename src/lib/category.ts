// import { apiFetch } from "./api";

// export async function getCategories() {
//   const res = await apiFetch("/categories");
//   return res.data;
// }

// lib/category.ts
import { apiFetch } from "./api";
import { isMock } from "@/lib/config";
import { MOCK_CATEGORIES } from "@/mocks/category";

export async function getCategories() {
  if (isMock) {
    await new Promise((res) => setTimeout(res, 300));
    return MOCK_CATEGORIES;
  }

  const res = await apiFetch("/categories");
  return res.data;
}
