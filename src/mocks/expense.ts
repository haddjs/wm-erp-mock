// mocks/expense.ts (updated with more realistic data)
import { Expense } from "@/types";

let expenses: Expense[] = [
  {
    id: "exp-1",
    user_id: "user-1",
    branch_id: "branch-1",
    category_id: "cat-1",
    file_id: null,
    name: "Internet Biznet",
    date: new Date().toISOString(),
    amount: 1,
    unit: "package",
    nominal: 500000,
    source: "Biznet",
  },
  {
    id: "exp-2",
    user_id: "user-2",
    branch_id: "branch-2",
    category_id: "cat-2",
    file_id: null,
    name: "ATK Supplies",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    amount: 5,
    unit: "items",
    nominal: 150000,
    source: "Shopee",
  },
  {
    id: "exp-3",
    user_id: "user-1",
    branch_id: "branch-1",
    category_id: "cat-3",
    file_id: null,
    name: "Office Snacks",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    amount: 10,
    unit: "packs",
    nominal: 200000,
    source: "Tokopedia",
  },
  {
    id: "exp-4",
    user_id: "user-3",
    branch_id: "branch-3",
    category_id: "cat-4",
    file_id: null,
    name: "Fuel Reimbursement",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    amount: 1,
    unit: "month",
    nominal: 750000,
    source: "Pertamina",
  },
  {
    id: "exp-5",
    user_id: "user-1",
    branch_id: "branch-1",
    category_id: "cat-5",
    file_id: null,
    name: "Google Ads Campaign",
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    amount: 1,
    unit: "campaign",
    nominal: 2500000,
    source: "Google",
  },
  {
    id: "exp-6",
    user_id: "user-2",
    branch_id: "branch-2",
    category_id: "cat-6",
    file_id: null,
    name: "Figma Subscription",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    amount: 1,
    unit: "month",
    nominal: 180000,
    source: "Figma",
  },
  {
    id: "exp-7",
    user_id: "user-3",
    branch_id: "branch-3",
    category_id: "cat-7",
    file_id: null,
    name: "New Monitor",
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    amount: 2,
    unit: "units",
    nominal: 3500000,
    source: "Electronic City",
  },
];

export const getMockExpenses = () => expenses;

export const addMockExpense = (newExpense: Expense) => {
  expenses = [
    {
      ...newExpense,
      id: `exp-${Date.now()}`,
    },
    ...expenses,
  ];
};

export const updateMockExpense = (
  id: string,
  updatedExpense: Partial<Expense>,
) => {
  expenses = expenses.map((exp) =>
    exp.id === id ? { ...exp, ...updatedExpense } : exp,
  );
};

export const deleteMockExpense = (id: string) => {
  expenses = expenses.filter((exp) => exp.id !== id);
};
