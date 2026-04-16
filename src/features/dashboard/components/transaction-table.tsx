"use client";

import { useExpense } from "@/hooks/useExpense";
import ModalExpenses from "./modal-expenses";
import TransactionTableBase from "@/components/TransactionTableBase";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Expense, Branch } from "@/types";
import { getBranch } from "@/lib/branch";

const TransactionTable = () => {
  const { getExpense, loading } = useExpense();
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const res = await getExpense();
        setExpenses(res.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    const fetchBranches = async () => {
      try {
        const res = await getBranch();
        setBranches(res);
      } catch (error) {
        console.error("Failed to fetch branches:", error);
      }
    };

    fetchBranches();
    fetchExpense();
  }, []);

  const recentTransaction = [...expenses]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <>
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-1">Recent Transactions</h2>
            <p className="text-sm text-gray-400">
              Latest expenses entries across all branches
            </p>
          </div>
          <ModalExpenses />
        </div>

        <TransactionTableBase data={recentTransaction} branches={branches} />
      </div>
      <Link href="/reports">
        <h2 className="text-sm text-center font-semibold mt-4 underline cursor-pointer hover:text-muted-foreground">
          All Transactions
        </h2>
      </Link>
    </>
  );
};

export default TransactionTable;
