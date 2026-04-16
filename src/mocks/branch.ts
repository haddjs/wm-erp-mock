// mocks/branch.ts (updated)
import { Branch } from "@/types";

export const MOCK_BRANCH: Branch[] = [
  {
    id: "branch-1",
    name: "Branch Jakarta",
    balance: 250000000,
  },
  {
    id: "branch-2",
    name: "Branch Surabaya",
    balance: 150000000,
  },
  {
    id: "branch-3",
    name: "Branch Bandung",
    balance: 100000000,
  },
  {
    id: "branch-4",
    name: "Branch Medan",
    balance: 80000000,
  },
  {
    id: "branch-5",
    name: "Branch Makassar",
    balance: 75000000,
  },
];

export const getMockBranches = () => MOCK_BRANCH;
