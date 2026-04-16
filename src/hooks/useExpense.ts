import { useState } from "react";
import { apiFetch } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

import { Expense } from "@/types";

export const useExpense = () => {
  const { accessToken } = useAuth();
  const [loading, setLoading] = useState(false);

  const createExpense = async (payload: any) => {
    try {
      setLoading(true);

      const token = accessToken ?? undefined;

      const res = await apiFetch(
        "/expenses",
        {
          method: "POST",
          body: JSON.stringify(payload),
        },
        token,
      );

      return res;
    } catch (error: any) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getExpense = async (): Promise<{
    success: boolean;
    data: Expense[];
  }> => {
    const token = accessToken ?? undefined;
    return apiFetch("/expenses", {}, token);
  };

  return {
    createExpense,
    getExpense,
    loading,
  };
};
