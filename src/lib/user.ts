// import { apiFetch } from "./api";

// export async function getProfile() {
//   const res = await apiFetch("/users/profile");
//   return res.data;
// }

// lib/user.ts
import { apiFetch } from "./api";
import { isMock } from "@/lib/config";
import { MOCK_PROFILE } from "@/mocks/user";

export async function getProfile() {
  if (isMock) {
    await new Promise((res) => setTimeout(res, 300));
    return MOCK_PROFILE;
  }

  const res = await apiFetch("/profile");
  return res.data;
}
