"use client";

import { Branch, Expense } from "@/types";

import { Eye, ArrowUp, ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";

type TransactionTableProps = {
  data: Expense[];
  branches: Branch[];
  sortBy?: keyof Expense | null;
  sortOrder?: "asc" | "desc";
  onSort?: (field: keyof Expense) => void;

  showActions?: boolean;
};

const columns: {
  key: keyof Expense;
  label: string;
  sortable?: boolean;
  format?: (value: any) => string;
}[] = [
  {
    key: "date",
    label: "Date",
    sortable: true,
    format: (value: string) =>
      new Date(value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
  },
  { key: "name", label: "Name", sortable: true },
  { key: "source", label: "Source", sortable: true },
  { key: "branch_id", label: "Branch", sortable: true },
  {
    key: "nominal",
    label: "Nominal",
    sortable: true,
    format: (value: number) => `Rp ${value.toLocaleString("id-ID")}`,
  },
];

const TransactionTableBase = ({
  data,
  branches,
  sortBy,
  sortOrder,
  onSort,
  showActions = true,
}: TransactionTableProps) => {
  const formatCellValue = (expense: Expense, key: keyof Expense) => {
    const column = columns.find((col) => col.key === key);
    const value = expense[key];

    if (key === "branch_id") {
      const branch = branches.find((b) => b.id === value);
      return branch ? branch.name : "Unknown";
    }

    if (column?.format) {
      return column.format(value);
    }

    return String(value);
  };

  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-center text-sm text-gray-500 border-b border-gray-200">
          {columns.map((col) => (
            <th
              key={col.key}
              className={`py-2 ${onSort && col.sortable ? "cursor-pointer hover:bg-gray-50" : ""}`}
              onClick={() => onSort && col.sortable && onSort(col.key)}
            >
              <div className="flex justify-center items-center gap-2">
                <span>{col.label}</span>

                {col.sortable &&
                  sortBy === col.key &&
                  (sortOrder === "asc" ? (
                    <ArrowUp className="w-4 h-4" />
                  ) : (
                    <ArrowDown className="w-4 h-4" />
                  ))}
              </div>
            </th>
          ))}

          {showActions && <th className="py-2">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((expense) => (
          <tr
            key={expense.id}
            className="text-center border-b border-gray-100 hover:bg-gray-50"
          >
            {columns.map((col) => (
              <td key={col.key} className="py-3 text-sm text-gray-700">
                {formatCellValue(expense, col.key)}
              </td>
            ))}
            {showActions && (
              <td className="py-3 text-sm text-gray-700">
                <div className="flex gap-3 justify-center">
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTableBase;
