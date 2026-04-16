"use client";

import { useEffect, useState } from "react";
import { useExpense } from "@/hooks/useExpense";
import { getBranch } from "@/lib/branch";

import TransactionTableBase from "@/components/TransactionTableBase";
import ReportsHeader from "@/features/reports/components/reports-header";
import ReportsControl from "@/features/reports/components/reports-control";
import { usePagination } from "@/features/reports/hooks/usePagination";

import { Expense, Branch } from "@/types";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ReportsPage = () => {
  const { getExpense, loading } = useExpense();

  const [branches, setBranches] = useState<Branch[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("All Branches");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchExpenses = async () => {
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

    fetchExpenses();
    fetchBranches();
  }, []);

  const filteredExpenses = expenses.filter((exp) => {
    const matchSearch =
      exp.name.toLowerCase().includes(search.toLowerCase()) ||
      exp.source.toLowerCase().includes(search.toLowerCase());

    const matchBranch =
      selectedBranch === "All Branches" || exp.branch_id === selectedBranch;

    return matchBranch && matchSearch;
  });

  const { totalPages, paginatedData, pages } = usePagination(
    filteredExpenses,
    currentPage,
    itemsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedBranch]);

  if (loading)
    return <p className="text-center text-gray-400 mt-12">Loading data...</p>;

  return (
    <div className="w-full">
      <ReportsHeader />

      <div className="p-8">
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <ReportsControl
            search={search}
            setSearch={setSearch}
            selectedBranch={selectedBranch}
            setSelectedBranch={setSelectedBranch}
            branches={branches}
          />

          {loading ? (
            <p>Loading...</p>
          ) : filteredExpenses.length === 0 ? (
            <p className="text-center text-gray-400 mt-12">
              {search || selectedBranch !== "All Branches"
                ? "No matching transactions found"
                : "No transactions available"}
            </p>
          ) : (
            <TransactionTableBase data={paginatedData} branches={branches} />
          )}

          {filteredExpenses.length > 0 && (
            <Pagination className="pt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {pages.map((page, i) => (
                  <PaginationItem key={i}>
                    {page === "..." ? (
                      <span className="px-3 text-gray-400">...</span>
                    ) : (
                      <PaginationLink
                        isActive={currentPage === page}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(Number(page));
                        }}
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
