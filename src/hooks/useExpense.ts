// import { useState } from "react";
// import { apiFetch } from "@/lib/api";
// import { useAuth } from "@/context/AuthContext";

// import { Expense } from "@/types";

// export const useExpense = () => {
//   const { accessToken } = useAuth();
//   const [loading, setLoading] = useState(false);

//   const createExpense = async (payload: any) => {
//     try {
//       setLoading(true);

//       const token = accessToken ?? undefined;

//       const res = await apiFetch(
//         "/expenses",
//         {
//           method: "POST",
//           body: JSON.stringify(payload),
//         },
//         token,
//       );

//       return res;
//     } catch (error: any) {
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getExpense = async (): Promise<{
//     success: boolean;
//     data: Expense[];
//   }> => {
//     const token = accessToken ?? undefined;
//     return apiFetch("/expenses", {}, token);
//   };

//   return {
//     createExpense,
//     getExpense,
//     loading,
//   };
// };

// hooks/useExpense.ts
import { useState } from "react";
import { apiFetch } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

import { Expense } from "@/types";

import { isMock } from "@/lib/config";
import { getMockExpenses, addMockExpense } from "@/mocks/expense";

export const useExpense = () => {
  const { accessToken } = useAuth();
  const [loading, setLoading] = useState(false);

  const createExpense = async (payload: any) => {
    try {
      setLoading(true);

      if (isMock) {
        await new Promise((res) => setTimeout(res, 400));

        addMockExpense(payload);

        return {
          success: true,
          data: payload,
        };
      }

      const token = accessToken ?? undefined;

      return await apiFetch(
        "/expenses",
        {
          method: "POST",
          body: JSON.stringify(payload),
        },
        token,
      );
    } finally {
      setLoading(false);
    }
  };

  const getExpense = async () => {
    if (isMock) {
      await new Promise((res) => setTimeout(res, 200));

      return {
        success: true,
        data: getMockExpenses(),
      };
    }

    const token = accessToken ?? undefined;
    return apiFetch("/expenses", {}, token);
  };

  return {
    createExpense,
    getExpense,
    loading,
  };
};
