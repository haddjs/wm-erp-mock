import { apiFetch } from "./api";

export async function getBranch() {
  const res = await apiFetch("/branches");
  return res.data;
}
