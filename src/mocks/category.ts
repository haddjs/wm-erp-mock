// mocks/category.ts (updated)
import { Category } from "@/types";

export const MOCK_CATEGORIES: Category[] = [
  {
    id: "cat-1",
    name: "Internet & Utilities",
    description: "Internet, electricity, water bills",
  },
  {
    id: "cat-2",
    name: "Office Supplies",
    description: "Stationery, printer ink, paper",
  },
  {
    id: "cat-3",
    name: "Snacks & Beverages",
    description: "Office snacks and drinks",
  },
  {
    id: "cat-4",
    name: "Transportation",
    description: "Fuel, taxi, travel expenses",
  },
  {
    id: "cat-5",
    name: "Marketing",
    description: "Ads, promotions, branding",
  },
  {
    id: "cat-6",
    name: "Software & Subscriptions",
    description: "SaaS, licenses, subscriptions",
  },
  {
    id: "cat-7",
    name: "Equipment",
    description: "Hardware, electronics, furniture",
  },
];

export const getMockCategories = () => MOCK_CATEGORIES;
