import { apiFetch } from "./api";

export async function getProfile() {
  const res = await apiFetch("/users/profile");
  return res.data;
}
