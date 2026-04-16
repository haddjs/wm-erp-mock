import { BudgetCategory } from "@/data/mock-data";
import { Progress } from "@/components/ui/progress";
import {
  Megaphone,
  Settings,
  Users,
  Cpu,
  TrendingUp,
  FlaskConical,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  settings: Settings,
  users: Users,
  cpu: Cpu,
  "trending-up": TrendingUp,
  "flask-conical": FlaskConical,
};

interface BudgetCardProps {
  budget: BudgetCategory;
}

export function BudgetCard({ budget }: BudgetCardProps) {
  const percentage = (budget.spent / budget.allocated) * 100;
  const remaining = budget.allocated - budget.spent;
  const Icon = iconMap[budget.icon] || Settings;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${budget.color}15` }}
          >
            <Icon className="w-5 h-5" style={{ color: budget.color }} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{budget.name}</h3>
            <p className="text-sm text-gray-500">{budget.department}</p>
            <p className="text-xs text-gray-400">{budget.branch}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Spent</span>
          <span className="font-semibold text-gray-900">
            ${budget.spent.toLocaleString()}
          </span>
        </div>

        <Progress value={percentage} className="h-2" />

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Budget</span>
          <span className="text-gray-900">
            ${budget.allocated.toLocaleString()}
          </span>
        </div>

        <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
          <span className="text-sm text-gray-600">Remaining</span>
          <span
            className={`font-semibold ${remaining > 0 ? "text-green-600" : "text-red-600"}`}
          >
            ${Math.abs(remaining).toLocaleString()}
          </span>
        </div>

        <div className="pt-2">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              percentage < 70
                ? "bg-green-100 text-green-800"
                : percentage < 90
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
            }`}
          >
            {percentage.toFixed(1)}% Used
          </span>
        </div>
      </div>
    </div>
  );
}
