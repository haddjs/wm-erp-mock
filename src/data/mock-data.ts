import { ActionType } from "./constants";

const BRANCHES = {
  BANDUNG: "Bandung",
  PEMUDA: "Pemuda",
  BSD: "BSD",
  KEMANG: "Kemang",
  KEBAYORAN: "Kebayoran",
  CIBUBUR: "Cibubur",
  PURI: "Puri",
  SURABAYA: "Surabaya",
} as const;

export const branchBudget = [
  {
    id: 1,
    name: "Pemuda",
    allocated: 12000000,
    spent: 8000000,
  },
  {
    id: 2,
    name: "Bandung",
    allocated: 15000000,
    spent: 9000000,
  },
  {
    id: 3,
    name: "BSD",
    allocated: 10000000,
    spent: 7000000,
  },
  {
    id: 4,
    name: "Kemang",
    allocated: 8000000,
    spent: 5000000,
  },
  {
    id: 5,
    name: "Kebayoran",
    allocated: 11000000,
    spent: 6000000,
  },
  {
    id: 6,
    name: "Cibubur",
    allocated: 9000000,
    spent: 4000000,
  },
  {
    id: 7,
    name: "Puri",
    allocated: 13000000,
    spent: 10000000,
  },
  {
    id: 8,
    name: "Surabaya",
    allocated: 14000000,
    spent: 11000000,
  },
];

export const categorySpendData = [
  { name: "Marketing", value: 12000000 },
  { name: "Operations", value: 9000000 },
  { name: "Salary", value: 20000000 },
  { name: "Maintenance", value: 6000000 },
];

export const transactionData = [
  // Pemuda
  {
    date: "2024-06-03",
    description: "Software Subscription",
    amount: 300.0,
    category: "Software",
    branch: "Pemuda",
  },
  {
    date: "2024-06-04",
    description: "Office Supplies",
    amount: 150.5,
    category: "Supplies",
    branch: "Pemuda",
  },
  {
    date: "2024-06-05",
    description: "Utilities Payment",
    amount: 500.0,
    category: "Utilities",
    branch: "Pemuda",
  },
  {
    date: "2024-06-06",
    description: "Equipment Maintenance",
    amount: 1200.0,
    category: "Maintenance",
    branch: "Pemuda",
  },
  {
    date: "2024-06-07",
    description: "Marketing Campaign",
    amount: 2500.0,
    category: "Marketing",
    branch: "Pemuda",
  },
  {
    date: "2024-06-08",
    description: "Staff Training",
    amount: 800.0,
    category: "Training",
    branch: "Pemuda",
  },
  {
    date: "2024-06-09",
    description: "Rent Payment",
    amount: 3000.0,
    category: "Rent",
    branch: "Pemuda",
  },
  {
    date: "2024-06-10",
    description: "Insurance Premium",
    amount: 450.0,
    category: "Insurance",
    branch: "Pemuda",
  },
  {
    date: "2024-06-11",
    description: "Cleaning Services",
    amount: 350.0,
    category: "Services",
    branch: "Pemuda",
  },
  {
    date: "2024-06-12",
    description: "Internet Bill",
    amount: 200.0,
    category: "Utilities",
    branch: "Pemuda",
  },

  // Bandung
  {
    date: "2024-06-03",
    description: "Software Subscription",
    amount: 300.0,
    category: "Software",
    branch: "Bandung",
  },
  {
    date: "2024-06-04",
    description: "Office Supplies",
    amount: 180.0,
    category: "Supplies",
    branch: "Bandung",
  },
  {
    date: "2024-06-05",
    description: "Utilities Payment",
    amount: 550.0,
    category: "Utilities",
    branch: "Bandung",
  },
  {
    date: "2024-06-06",
    description: "Equipment Maintenance",
    amount: 1500.0,
    category: "Maintenance",
    branch: "Bandung",
  },
  {
    date: "2024-06-07",
    description: "Marketing Campaign",
    amount: 3000.0,
    category: "Marketing",
    branch: "Bandung",
  },
  {
    date: "2024-06-08",
    description: "Staff Training",
    amount: 900.0,
    category: "Training",
    branch: "Bandung",
  },
  {
    date: "2024-06-09",
    description: "Rent Payment",
    amount: 3500.0,
    category: "Rent",
    branch: "Bandung",
  },
  {
    date: "2024-06-10",
    description: "Insurance Premium",
    amount: 500.0,
    category: "Insurance",
    branch: "Bandung",
  },
  {
    date: "2024-06-11",
    description: "Cleaning Services",
    amount: 400.0,
    category: "Services",
    branch: "Bandung",
  },
  {
    date: "2024-06-12",
    description: "Internet Bill",
    amount: 220.0,
    category: "Utilities",
    branch: "Bandung",
  },

  // BSD
  {
    date: "2024-06-03",
    description: "Software Subscription",
    amount: 300.0,
    category: "Software",
    branch: "BSD",
  },
  {
    date: "2024-06-04",
    description: "Office Supplies",
    amount: 120.0,
    category: "Supplies",
    branch: "BSD",
  },
  {
    date: "2024-06-05",
    description: "Utilities Payment",
    amount: 400.0,
    category: "Utilities",
    branch: "BSD",
  },
  {
    date: "2024-06-06",
    description: "Equipment Maintenance",
    amount: 900.0,
    category: "Maintenance",
    branch: "BSD",
  },
  {
    date: "2024-06-07",
    description: "Marketing Campaign",
    amount: 1800.0,
    category: "Marketing",
    branch: "BSD",
  },
  {
    date: "2024-06-08",
    description: "Staff Training",
    amount: 600.0,
    category: "Training",
    branch: "BSD",
  },
  {
    date: "2024-06-09",
    description: "Rent Payment",
    amount: 2500.0,
    category: "Rent",
    branch: "BSD",
  },
  {
    date: "2024-06-10",
    description: "Insurance Premium",
    amount: 350.0,
    category: "Insurance",
    branch: "BSD",
  },
  {
    date: "2024-06-11",
    description: "Cleaning Services",
    amount: 280.0,
    category: "Services",
    branch: "BSD",
  },
  {
    date: "2024-06-12",
    description: "Internet Bill",
    amount: 180.0,
    category: "Utilities",
    branch: "BSD",
  },

  // Kemang
  {
    date: "2024-06-03",
    description: "Software Subscription",
    amount: 300.0,
    category: "Software",
    branch: "Kemang",
  },
  {
    date: "2024-06-04",
    description: "Office Supplies",
    amount: 100.0,
    category: "Supplies",
    branch: "Kemang",
  },
  {
    date: "2024-06-05",
    description: "Utilities Payment",
    amount: 320.0,
    category: "Utilities",
    branch: "Kemang",
  },
  {
    date: "2024-06-06",
    description: "Equipment Maintenance",
    amount: 750.0,
    category: "Maintenance",
    branch: "Kemang",
  },
  {
    date: "2024-06-07",
    description: "Marketing Campaign",
    amount: 1500.0,
    category: "Marketing",
    branch: "Kemang",
  },
  {
    date: "2024-06-08",
    description: "Staff Training",
    amount: 500.0,
    category: "Training",
    branch: "Kemang",
  },
  {
    date: "2024-06-09",
    description: "Rent Payment",
    amount: 2000.0,
    category: "Rent",
    branch: "Kemang",
  },
  {
    date: "2024-06-10",
    description: "Insurance Premium",
    amount: 300.0,
    category: "Insurance",
    branch: "Kemang",
  },
  {
    date: "2024-06-11",
    description: "Cleaning Services",
    amount: 250.0,
    category: "Services",
    branch: "Kemang",
  },
  {
    date: "2024-06-12",
    description: "Internet Bill",
    amount: 160.0,
    category: "Utilities",
    branch: "Kemang",
  },

  // Kebayoran
  {
    date: "2024-06-03",
    description: "Software Subscription",
    amount: 300.0,
    category: "Software",
    branch: "Kebayoran",
  },
  {
    date: "2024-06-04",
    description: "Office Supplies",
    amount: 140.0,
    category: "Supplies",
    branch: "Kebayoran",
  },
  {
    date: "2024-06-05",
    description: "Utilities Payment",
    amount: 450.0,
    category: "Utilities",
    branch: "Kebayoran",
  },
  {
    date: "2024-06-06",
    description: "Equipment Maintenance",
    amount: 1100.0,
    category: "Maintenance",
    branch: "Kebayoran",
  },
  {
    date: "2024-06-07",
    description: "Marketing Campaign",
    amount: 2200.0,
    category: "Marketing",
    branch: "Kebayoran",
  },
  {
    date: "2024-06-08",
    description: "Staff Training",
    amount: 700.0,
    category: "Training",
    branch: "Kebayoran",
  },
  {
    date: "2024-06-09",
    description: "Rent Payment",
    amount: 2800.0,
    category: "Rent",
    branch: "Kebayoran",
  },
  {
    date: "2024-06-10",
    description: "Insurance Premium",
    amount: 400.0,
    category: "Insurance",
    branch: "Kebayoran",
  },
  {
    date: "2024-06-11",
    description: "Cleaning Services",
    amount: 320.0,
    category: "Services",
    branch: "Kebayoran",
  },
  {
    date: "2024-06-12",
    description: "Internet Bill",
    amount: 190.0,
    category: "Utilities",
    branch: "Kebayoran",
  },

  // Cibubur
  {
    date: "2024-06-03",
    description: "Software Subscription",
    amount: 300.0,
    category: "Software",
    branch: "Cibubur",
  },
  {
    date: "2024-06-04",
    description: "Office Supplies",
    amount: 110.0,
    category: "Supplies",
    branch: "Cibubur",
  },
  {
    date: "2024-06-05",
    description: "Utilities Payment",
    amount: 380.0,
    category: "Utilities",
    branch: "Cibubur",
  },
  {
    date: "2024-06-06",
    description: "Equipment Maintenance",
    amount: 850.0,
    category: "Maintenance",
    branch: "Cibubur",
  },
  {
    date: "2024-06-07",
    description: "Marketing Campaign",
    amount: 1600.0,
    category: "Marketing",
    branch: "Cibubur",
  },
  {
    date: "2024-06-08",
    description: "Staff Training",
    amount: 550.0,
    category: "Training",
    branch: "Cibubur",
  },
  {
    date: "2024-06-09",
    description: "Rent Payment",
    amount: 2200.0,
    category: "Rent",
    branch: "Cibubur",
  },
  {
    date: "2024-06-10",
    description: "Insurance Premium",
    amount: 320.0,
    category: "Insurance",
    branch: "Cibubur",
  },
  {
    date: "2024-06-11",
    description: "Cleaning Services",
    amount: 270.0,
    category: "Services",
    branch: "Cibubur",
  },
  {
    date: "2024-06-12",
    description: "Internet Bill",
    amount: 170.0,
    category: "Utilities",
    branch: "Cibubur",
  },

  // Puri
  {
    date: "2024-06-03",
    description: "Software Subscription",
    amount: 300.0,
    category: "Software",
    branch: "Puri",
  },
  {
    date: "2024-06-04",
    description: "Office Supplies",
    amount: 160.0,
    category: "Supplies",
    branch: "Puri",
  },
  {
    date: "2024-06-05",
    description: "Utilities Payment",
    amount: 520.0,
    category: "Utilities",
    branch: "Puri",
  },
  {
    date: "2024-06-06",
    description: "Equipment Maintenance",
    amount: 1300.0,
    category: "Maintenance",
    branch: "Puri",
  },
  {
    date: "2024-06-07",
    description: "Marketing Campaign",
    amount: 2800.0,
    category: "Marketing",
    branch: "Puri",
  },
  {
    date: "2024-06-08",
    description: "Staff Training",
    amount: 850.0,
    category: "Training",
    branch: "Puri",
  },
  {
    date: "2024-06-09",
    description: "Rent Payment",
    amount: 3200.0,
    category: "Rent",
    branch: "Puri",
  },
  {
    date: "2024-06-10",
    description: "Insurance Premium",
    amount: 480.0,
    category: "Insurance",
    branch: "Puri",
  },
  {
    date: "2024-06-11",
    description: "Cleaning Services",
    amount: 380.0,
    category: "Services",
    branch: "Puri",
  },
  {
    date: "2024-06-12",
    description: "Internet Bill",
    amount: 210.0,
    category: "Utilities",
    branch: "Puri",
  },

  // Surabaya
  {
    date: "2024-06-03",
    description: "Software Subscription",
    amount: 300.0,
    category: "Software",
    branch: "Surabaya",
  },
  {
    date: "2024-06-04",
    description: "Office Supplies",
    amount: 170.0,
    category: "Supplies",
    branch: "Surabaya",
  },
  {
    date: "2024-06-05",
    description: "Utilities Payment",
    amount: 580.0,
    category: "Utilities",
    branch: "Surabaya",
  },
  {
    date: "2024-06-06",
    description: "Equipment Maintenance",
    amount: 1400.0,
    category: "Maintenance",
    branch: "Surabaya",
  },
  {
    date: "2024-06-07",
    description: "Marketing Campaign",
    amount: 3200.0,
    category: "Marketing",
    branch: "Surabaya",
  },
  {
    date: "2024-06-08",
    description: "Staff Training",
    amount: 950.0,
    category: "Training",
    branch: "Surabaya",
  },
  {
    date: "2024-06-09",
    description: "Rent Payment",
    amount: 3600.0,
    category: "Rent",
    branch: "Surabaya",
  },
  {
    date: "2024-06-10",
    description: "Insurance Premium",
    amount: 520.0,
    category: "Insurance",
    branch: "Surabaya",
  },
  {
    date: "2024-06-11",
    description: "Cleaning Services",
    amount: 420.0,
    category: "Services",
    branch: "Surabaya",
  },
  {
    date: "2024-06-12",
    description: "Internet Bill",
    amount: 240.0,
    category: "Utilities",
    branch: "Surabaya",
  },
];

export interface BudgetCategory {
  id: string;
  name: string;
  allocated: number;
  spent: number;
  department: string;
  branch: string;
  icon: string;
  color: string;
}

export type Transaction = {
  date: string;
  description: string;
  amount: number;
  category: string;
  branch: string;
};

export interface LogEntry {
  id: string;
  action: ActionType;
  title: string;
  description: string;
  timestamp: string;
  user: string;
  branch: string;
  amount: number;
  nominal: number;
}
