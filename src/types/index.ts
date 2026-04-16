export type Branch = {
  id: string;
  name: string;
  balance: number;
};

export type Category = {
  id: string;
  name: string;
  description: string;
};

export type Expense = {
  id: string;
  user_id: string;
  branch_id: string;
  category_id: string;
  file_id: string | null;
  name: string;
  date: string;
  amount: number;
  unit: string;
  nominal: number;
  source: string;
};

export type Request = {
  id: string;
  branch_id: string;
  requester_id: string;
  approver_id: string | null;
  file_id: string | null;
  name: string;
  amount: number;
  nominal: number;
  date: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "approved" | "rejected" | "disburse";
};
