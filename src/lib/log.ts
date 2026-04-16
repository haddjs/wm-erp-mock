import { LOG_ACTION, ActionType } from "@/data/constants";
import { LogEntry } from "@/data/mock-data";

type FilterParams = {
  logs: LogEntry[];
  searchQuery: string;
  actionFilter: ActionType | "all";
  dateFilter: "today" | "yesterday" | "week" | "all";
};

export const getLogConfig = (action: string) => {
  return LOG_ACTION[action as ActionType];
};

export const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? "s" : ""} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const filterLogs = ({
  logs,
  searchQuery,
  actionFilter,
  dateFilter,
}: FilterParams) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const weekAgo = new Date(today);
  weekAgo.setDate(weekAgo.getDate() - 7);

  return logs
    .filter((log) => {
      const logDate = new Date(log.timestamp);

      switch (dateFilter) {
        case "today":
          return logDate >= today;
        case "yesterday":
          return logDate >= yesterday && logDate < today;
        case "week":
          return logDate >= weekAgo;
        case "all":
        default:
          return true;
      }
    })
    .filter((log) => {
      const q = searchQuery.toLowerCase();

      const title = log.title?.toLowerCase() || "";
      const description = log.description?.toLowerCase() || "";

      const matchesSearch = title.includes(q) || description.includes(q);

      const matchesAction =
        actionFilter === "all" || log.action === actionFilter;
      return matchesSearch && matchesAction;
    });
};
