// import { apiFetch } from "./api";

// export async function getBranch() {
//   const res = await apiFetch("/branches");
//   return res.data;
// }

// lib/branch.ts
import { apiFetch } from "./api";
import { isMock } from "@/lib/config";
import { MOCK_BRANCH } from "@/mocks/branch";

export async function getBranch() {
  if (isMock) {
    await new Promise((res) => setTimeout(res, 300));
    return MOCK_BRANCH;
  }

  const res = await apiFetch("/branches");
  return res.data;
}
