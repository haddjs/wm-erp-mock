"use client";

import ApprovalHeader from "@/features/approvals/components/approval-header";
import StatisticCard from "@/components/StatisticCard";
import ApprovalTable from "@/features/approvals/components/approval-table";

import { useRequest } from "@/features/budget/hooks/useRequest";
import { getProfile } from "@/lib/user";
import { getBranch } from "@/lib/branch";
import { getApprovalStats } from "@/features/approvals/utils/getApprovalStats";

import { Branch, Request } from "@/types";
import { useEffect, useMemo, useState } from "react";

const ApprovalPage = () => {
  const { getRequest, loading } = useRequest();
  const [request, setRequest] = useState<Request[]>([]);
  const [profile, setProfile] = useState<{ id: string; name: string } | null>(
    null,
  );
  const [branches, setBranches] = useState<Branch[]>([]);
  const [search, setSearch] = useState("");

  const [priority, setPriority] = useState("All Priority");
  const [status, setStatus] = useState("All Status");

  const stats = getApprovalStats(request);

  const fetchData = async () => {
    const res = await getRequest();
    setRequest(res.data);
  };

  const fetchProfile = async () => {
    const res = await getProfile();
    setProfile(res);
  };

  const fetchBranch = async () => {
    const res = await getBranch();
    setBranches(res);
  };

  useEffect(() => {
    fetchBranch();
    fetchProfile();
    fetchData();
  }, []);

  const filteredRequest = useMemo(() => {
    return request.filter((req) => {
      const q = search.toLowerCase();

      const matchesSearch =
        req.name.toLowerCase().includes(q) ||
        req.priority.toLowerCase().includes(q);

      const matchesStatus =
        status === "All Status" || req.status === status.toLowerCase();

      const matchesPriority =
        priority === "All Priority" || req.priority === priority.toLowerCase();

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [request, search, status, priority]);

  return (
    <div className="w-full">
      <ApprovalHeader
        search={search}
        setSearch={setSearch}
        priority={priority}
        setPriority={setPriority}
        status={status}
        setStatus={setStatus}
      />

      <div className="p-8">
        <StatisticCard data={stats} />
        <ApprovalTable
          data={filteredRequest}
          profile={profile}
          branches={branches}
          refreshData={fetchData}
        />
      </div>
    </div>
  );
};

export default ApprovalPage;
