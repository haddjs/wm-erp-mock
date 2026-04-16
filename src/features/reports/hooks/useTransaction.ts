import { useMemo } from "react";
import { Transaction } from "@/data/mock-data";

type Params = {
  data: Transaction[];
  search: string;
  selectedBranch: string;
  sortBy: keyof Transaction | null;
  sortOrder: "asc" | "desc";
};

export const useTransaction = ({
  data,
  search,
  selectedBranch,
  sortBy,
  sortOrder,
}: Params) => {
  return useMemo(() => {
    let result = [...data];

    //Filter
    result = result.filter((trx) => {
      const matchSearch =
        trx.description.toLowerCase().includes(search.toLowerCase()) ||
        trx.category.toLowerCase().includes(search.toLowerCase());

      const matchBranch =
        selectedBranch === "All Branches" || trx.branch === selectedBranch;

      return matchSearch && matchBranch;
    });

    //Sort
    if (sortBy) {
      result.sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];

        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
        }

        if (sortBy === "date") {
          return sortOrder === "asc"
            ? new Date(aValue as string).getTime() -
                new Date(bValue as string).getTime()
            : new Date(bValue as string).getTime() -
                new Date(aValue as string).getTime();
        }

        return sortOrder === "asc"
          ? String(aValue).localeCompare(String(bValue))
          : String(bValue).localeCompare(String(aValue));
      });
    }

    return result;
  }, [data, search, selectedBranch, sortBy, sortOrder]);
};
