"use client";

import { useState, useMemo, useEffect } from "react";

import {
  Activity,
  CircleCheck,
  DollarSign,
  Receipt,
  XCircle,
} from "lucide-react";

import { useActivityLog } from "@/features/logs/utils/useActivityLog";
import { mapLog } from "@/features/logs/utils/log-adapter";
import { filterLogs } from "@/lib/log";
import { LogEntry } from "@/data/mock-data";

import LogHeader from "@/features/logs/components/log-header";
import { ActionType, LOGS_STATS } from "@/data/constants";
import StatisticCard from "@/components/StatisticCard";
import LogList from "@/features/logs/components/log-list";

const LogsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [action, setAction] = useState<"all" | ActionType>("all");
  const [date, setDate] = useState<"all" | "today" | "yesterday" | "week">(
    "all",
  );
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const { getLogs } = useActivityLog();

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await getLogs();
        const mapped = res.data.map(mapLog);
        setLogs(mapped);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLogs();
  }, []);

  const filteredLogs = useMemo(() => {
    return filterLogs({
      logs,
      searchQuery,
      actionFilter: action,
      dateFilter: date,
    });
  }, [logs, searchQuery, action, date]);

  const statsData = useMemo(() => {
    let totalAction = 0;
    let totalExpense = 0;
    let totalApproved = 0;
    let totalRejected = 0;

    filteredLogs.forEach((log) => {
      totalAction++;

      if (log.action === "expense_recorded") {
        totalExpense++;
      }

      if (log.action === "request_approved") {
        totalApproved++;
      }

      if (log.action === "request_rejected") {
        totalRejected++;
      }
    });

    return [
      {
        label: "Total Activities",
        total: totalAction.toString(),
        icon: Activity,
        color: "text-blue-600",
      },
      {
        label: "Expenses Recorded",
        total: totalExpense.toString(),
        icon: Receipt,
        color: "text-purple-600",
      },
      {
        label: "Request Approved",
        total: totalApproved.toString(),
        icon: CircleCheck,
        color: "text-green-600",
      },
      {
        label: "Request Rejected",
        total: totalRejected.toString(),
        icon: XCircle,
        color: "text-red-600",
      },
    ];
  }, [filteredLogs]);

  return (
    <div className="w-full">
      <LogHeader
        action={action}
        setAction={setAction}
        date={date}
        setDate={setDate}
        search={searchQuery}
        setSearch={setSearchQuery}
      />

      <div className="p-8">
        <StatisticCard data={statsData} />
        <LogList logs={filteredLogs} />
      </div>
    </div>
  );
};

export default LogsPage;
