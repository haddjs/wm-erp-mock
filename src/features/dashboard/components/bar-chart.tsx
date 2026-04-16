"use client";

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { Branch, Expense } from "@/types";
import { useMemo } from "react";

type Props = {
  expenses: Expense[];
  branches: Branch[];
};

const BarChart = ({ expenses, branches }: Props) => {
  const barData = useMemo(() => {
    const spentMap: Record<string, number> = {};

    branches.forEach((b) => {
      spentMap[b.id] = 0;
    });

    expenses.forEach((e) => {
      if (!e.branch_id) return;
      spentMap[e.branch_id] += e.nominal;
    });

    return branches.map((b) => ({
      name: b.name.replace("Branch", ""),
      allocated: b.balance,
      spent: spentMap[b.id] || 0,
    }));
  }, [expenses, branches]);

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">
        Budget Allocation vs Spending
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(v) => `Rp ${(v / 1000000).toFixed(0)}jt`} />
          <Tooltip />
          <Legend />
          <Bar dataKey="allocated" fill="#8884d8" name="Allocated" />
          <Bar dataKey="spent" fill="#82ca9d" name="Spent" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
