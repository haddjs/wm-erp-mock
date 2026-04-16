// import { useState } from "react";
// import { apiFetch } from "@/lib/api";
// import { useAuth } from "@/context/AuthContext";

// export const useActivityLog = () => {
//   const { accessToken } = useAuth();
//   const [loading, setLoading] = useState(false);

//   const getLogs = async (page = 1, limit = 10) => {
//     try {
//       setLoading(true);

//       const res = await apiFetch(
//         `/activity-logs?page=${page}&limit=${limit}`,
//         {},
//         accessToken || undefined,
//       );

//       return res;
//     } catch (error) {
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { getLogs, loading };
// };

// features/logs/utils/useActivityLog.ts (simplified - no longer needed, but keep for compatibility)
import { useState } from "react";
import { getMockActivityLogs } from "@/mocks/activity-logs";

export const useActivityLog = () => {
  const [loading, setLoading] = useState(false);

  const getLogs = async (page = 1, limit = 10) => {
    try {
      setLoading(true);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      const allLogs = getMockActivityLogs();
      const start = (page - 1) * limit;
      const end = start + limit;

      return {
        success: true,
        data: allLogs.slice(start, end),
        pagination: {
          page,
          limit,
          total: allLogs.length,
          totalPages: Math.ceil(allLogs.length / limit),
        },
      };
    } finally {
      setLoading(false);
    }
  };

  return { getLogs, loading };
};
