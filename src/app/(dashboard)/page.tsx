// "use client";

// import { useEffect, useState, useMemo } from "react";

// import { useExpense } from "@/hooks/useExpense";
// import { getBranch } from "@/lib/branch";
// import { useActivityLog } from "@/features/logs/utils/useActivityLog";
// import { getCategories } from "@/lib/category";

// import { Expense, Branch, Category } from "@/types";
// import { LogEntry } from "@/data/mock-data";
// import { mapLog } from "@/features/logs/utils/log-adapter";

// import DashboardHeader from "@/features/dashboard/components/dashboard-header";
// import DashboardStats from "@/features/dashboard/components/dashboard-stats";
// import BarChart from "@/features/dashboard/components/bar-chart";
// import PieChart from "@/features/dashboard/components/pie-chart";
// import TransactionTable from "@/features/dashboard/components/transaction-table";

// const Dashboard = () => {
//   const { getExpense } = useExpense();
//   const { getLogs } = useActivityLog();

//   const [expenses, setExpenses] = useState<Expense[]>([]);
//   const [branches, setBranches] = useState<Branch[]>([]);
//   const [logs, setLogs] = useState<LogEntry[]>([]);
//   const [categories, setCategories] = useState<Category[]>([]);

//   const fetchData = async () => {
//     const exp = await getExpense();
//     const br = await getBranch();
//     const logRes = await getLogs();
//     const catRes = await getCategories();

//     setLogs(logRes.data.map(mapLog));
//     setExpenses(exp.data);
//     setBranches(br);
//     setCategories(catRes);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="w-full">
//       <DashboardHeader />
//       <DashboardStats expenses={expenses} branches={branches} />

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 pb-8">
//         <BarChart expenses={expenses} branches={branches} />
//         <PieChart expenses={expenses} categories={categories} />
//       </div>

//       <div className="px-8 pb-8">
//         <TransactionTable />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// app/dashboard/page.tsx
"use client";

import { useEffect, useState, useMemo } from "react";

import { getMockExpenses } from "@/mocks/expense";
import { getMockBranches } from "@/mocks/branch";
import { getMockActivityLogs } from "@/mocks/activity-logs";
import { getMockCategories } from "@/mocks/category";

import { Expense, Branch, Category } from "@/types";
import { LogEntry } from "@/data/mock-data";
import { mapLog } from "@/features/logs/utils/log-adapter";

import DashboardHeader from "@/features/dashboard/components/dashboard-header";
import DashboardStats from "@/features/dashboard/components/dashboard-stats";
import BarChart from "@/features/dashboard/components/bar-chart";
import PieChart from "@/features/dashboard/components/pie-chart";
import TransactionTable from "@/features/dashboard/components/transaction-table";

const Dashboard = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const exp = getMockExpenses();
    const br = getMockBranches();
    const logRes = getMockActivityLogs();
    const catRes = getMockCategories();

    setLogs(logRes.map(mapLog));
    setExpenses(exp);
    setBranches(br);
    setCategories(catRes);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <DashboardHeader branches={branches} />
      <DashboardStats expenses={expenses} branches={branches} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 pb-8">
        <BarChart expenses={expenses} branches={branches} />
        <PieChart expenses={expenses} categories={categories} />
      </div>

      <div className="px-8 pb-8">
        <TransactionTable expenses={expenses} branches={branches} />
      </div>
    </div>
  );
};

export default Dashboard;
