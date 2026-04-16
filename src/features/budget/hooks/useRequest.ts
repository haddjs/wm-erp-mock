// import { useState } from "react";
// import { apiFetch } from "@/lib/api";
// import { useAuth } from "@/context/AuthContext";

// import { Request } from "@/types";

// export const useRequest = () => {
//   const { accessToken } = useAuth();
//   const [loading, setLoading] = useState(false);

//   const createRequest = async (payload: any) => {
//     try {
//       setLoading(true);

//       const res = await apiFetch(
//         "/requests",
//         {
//           method: "POST",
//           body: JSON.stringify(payload),
//         },
//         accessToken || undefined,
//       );

//       return res;
//     } catch (error: any) {
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getRequest = async (): Promise<{
//     success: boolean;
//     data: Request[];
//   }> => {
//     const token = accessToken ?? undefined;
//     return apiFetch("/requests", {}, token);
//   };

//   const updateRequestStatus = async (
//     id: string,
//     status: "approved" | "rejected" | "disburse",
//   ) => {
//     try {
//       setLoading(true);
//       const token = accessToken ?? undefined;

//       const res = await apiFetch(
//         `/requests/${id}/status`,
//         {
//           method: "PATCH",
//           body: JSON.stringify({ status }),
//         },
//         token || undefined,
//       );

//       return res;
//     } catch (error) {
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     getRequest,
//     createRequest,
//     updateRequestStatus,
//     loading,
//   };
// };

// hooks/useRequest.ts
import { useState } from "react";
import { apiFetch } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

import { Request } from "@/types";
import { isMock } from "@/lib/config";
import {
  getMockRequests,
  addMockRequest,
  updateMockRequestStatus,
} from "@/mocks/request";

export const useRequest = () => {
  const { accessToken } = useAuth();
  const [loading, setLoading] = useState(false);

  const createRequest = async (payload: any) => {
    try {
      setLoading(true);

      if (isMock) {
        await new Promise((res) => setTimeout(res, 400));

        addMockRequest(payload);

        return {
          success: true,
          data: payload,
        };
      }

      const res = await apiFetch(
        "/requests",
        {
          method: "POST",
          body: JSON.stringify(payload),
        },
        accessToken || undefined,
      );

      return res;
    } catch (error: any) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getRequest = async (): Promise<{
    success: boolean;
    data: Request[];
  }> => {
    if (isMock) {
      await new Promise((res) => setTimeout(res, 200));

      return {
        success: true,
        data: getMockRequests(),
      };
    }

    const token = accessToken ?? undefined;
    return apiFetch("/requests", {}, token);
  };

  const updateRequestStatus = async (
    id: string,
    status: "approved" | "rejected" | "disburse",
  ) => {
    try {
      setLoading(true);

      if (isMock) {
        await new Promise((res) => setTimeout(res, 300));

        updateMockRequestStatus(id, status);

        return {
          success: true,
          message: `Request ${status} successfully`,
        };
      }

      const token = accessToken ?? undefined;

      const res = await apiFetch(
        `/requests/${id}/status`,
        {
          method: "PATCH",
          body: JSON.stringify({ status }),
        },
        token || undefined,
      );

      return res;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    getRequest,
    createRequest,
    updateRequestStatus,
    loading,
  };
};
