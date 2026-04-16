import { useState } from "react";
import { apiFetch } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export const useActivityLog = () => {
  const { accessToken } = useAuth();
  const [loading, setLoading] = useState(false);

  const getLogs = async (page = 1, limit = 10) => {
    try {
      setLoading(true);

      const res = await apiFetch(
        `/activity-logs?page=${page}&limit=${limit}`,
        {},
        accessToken || undefined,
      );

      return res;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { getLogs, loading };
};
