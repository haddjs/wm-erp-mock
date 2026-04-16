"use client";

import {
  PieChart as RechartsPieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

import { Category, Expense } from "@/types";

import { useMemo } from "react";

type Props = {
  expenses: Expense[];
  categories: Category[];
};

const PieChart = ({ expenses, categories = [] }: Props) => {
  const pieData = useMemo(() => {
    if (!categories?.length) return [];

    const map: Record<string, number> = {};

    categories.forEach((cat) => {
      map[cat.id] = 0;
    });

    expenses.forEach((expense) => {
      const catId = expense.category_id;
      if (!catId) return;

      map[catId] = (map[catId] || 0) + Math.abs(expense.nominal);
    });

    return categories.map((cat) => ({
      name: cat.name,
      value: map[cat.id] || 0,
    }));
  }, [expenses, categories]);

  if (!categories?.length) {
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Spending by Category</h2>
        <p className="text-gray-400 text-sm">Loading categories...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Spending by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsPieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            fill="#8884d8"
            label={({ percent }) =>
              `${percent ? (percent * 100).toFixed(2) : 0}%`
            }
          >
            {pieData.map((_, index) => {
              const colors = [
                "#3b82f6",
                "#ef4444",
                "#10b981",
                "#f59e0b",
                "#8b5cf6",
                "#ec4899",
              ];
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              );
            })}
          </Pie>
          <Tooltip />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
