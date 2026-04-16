import {
  DollarSign,
  BanknoteArrowDown,
  Target,
  CircleAlert,
  TrendingUp,
  TrendingDown,
  Activity,
  LucideIcon,
} from "lucide-react";

export const statisticData = {
  totalBudget: {
    name: "Total Budget",
    value: "Rp. 10.000.000",
    icon: DollarSign,
    subIcon: TrendingUp,
    iconClassName: "w-12 h-12 text-blue-500 bg-blue-200 p-3 rounded-lg",
    subIconClassName: "w-6 h-6 text-green-500",
  },
  totalSpent: {
    name: "Total Spent",
    value: "Rp. 32.500",
    icon: BanknoteArrowDown,
    subIcon: TrendingDown,
    iconClassName: "w-12 h-12 text-red-500 bg-red-200 p-3 rounded-lg",
    subIconClassName: "w-6 h-6 text-red-500",
  },
  remaining: {
    name: "Remaining",
    value: "Rp. 17.500",
    icon: Target,
    subIcon: TrendingUp,
    iconClassName: "w-12 h-12 text-green-500 bg-green-200 p-3 rounded-lg",
    subIconClassName: "w-6 h-6 text-green-500",
  },
  utilizationRate: {
    name: "Utilization Rate",
    value: "65%",
    icon: CircleAlert,
    subIcon: Activity,
    iconClassName: "w-12 h-12 text-purple-500 bg-purple-200 p-3 rounded-lg",
    subIconClassName: "w-6 h-6 text-purple-500",
  },
};

export const getStatistics = () => {
  return [
    statisticData.totalBudget,
    statisticData.totalSpent,
    statisticData.remaining,
    statisticData.utilizationRate,
  ];
};

export type StatisticCardItem = {
  color: string;
  label: string;
  total: string;
  icon: LucideIcon;
};
