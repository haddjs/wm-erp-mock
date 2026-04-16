import { Expense, Branch } from "@/types";
import { useMemo } from "react";

import {
  DollarSign,
  BanknoteArrowDown,
  Target,
  CircleAlert,
  TrendingUp,
  TrendingDown,
  Activity,
} from "lucide-react";

type Props = {
  expenses: Expense[];
  branches: Branch[];
};

const DashboardStats = ({ expenses, branches }: Props) => {
  const stats = useMemo(() => {
    const totalBudget = branches.reduce((sum, b) => sum + b.balance, 0);

    const totalSpent = expenses.reduce((sum, e) => sum + e.nominal, 0);

    const remaining = totalBudget - totalSpent;

    const utilization =
      totalBudget > 0 ? ((totalSpent / totalBudget) * 100).toFixed(2) : "0";

    return [
      {
        name: "Total Budget",
        value: `Rp ${totalBudget.toLocaleString("id-ID")}`,
        icon: DollarSign,
        subIcon: TrendingUp,
        iconClassName: "w-12 h-12 text-blue-500 bg-blue-200 p-3 rounded-lg",
        subIconClassName: "w-6 h-6 text-green-500",
      },
      {
        name: "Total Spent",
        value: `Rp ${totalSpent.toLocaleString("id-ID")}`,
        icon: BanknoteArrowDown,
        subIcon: TrendingDown,
        iconClassName: "w-12 h-12 text-red-500 bg-red-200 p-3 rounded-lg",
        subIconClassName: "w-6 h-6 text-red-500",
      },
      {
        name: "Remaining",
        value: `Rp ${remaining.toLocaleString("id-ID")}`,
        icon: Target,
        subIcon: remaining >= 0 ? TrendingUp : TrendingDown,
        iconClassName: "w-12 h-12 text-green-500 bg-green-200 p-3 rounded-lg",
        subIconClassName:
          remaining >= 0 ? "w-6 h-6 text-green-500" : "w-6 h-6 text-red-500",
      },
      {
        name: "Utilization Rate",
        value: `${utilization}%`,
        icon: CircleAlert,
        subIcon: Number(utilization) > 70 ? TrendingDown : TrendingUp,
        iconClassName: "w-12 h-12 text-purple-500 bg-purple-200 p-3 rounded-lg",
        subIconClassName:
          Number(utilization) > 70
            ? "w-6 h-6 text-red-500"
            : "w-6 h-6 text-green-500",
      },
    ];
  }, [expenses, branches]);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-8">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="flex flex-col justify-between gap-5 bg-white py-6 px-8 rounded-lg border border-gray-200"
        >
          <div className="flex justify-between items-center">
            <stat.icon className={stat.iconClassName} />
            <stat.subIcon className={stat.subIconClassName} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-sm text-gray-600">{stat.name}</h1>
            <p className="text-xl font-semibold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
