// mocks/request.ts
import { Request } from "@/types";

let requests: Request[] = [
  {
    id: "req-1",
    branch_id: "branch-1",
    requester_id: "user-1",
    approver_id: null,
    file_id: null,
    name: "Office Supplies Request",
    amount: 5,
    nominal: 250000,
    date: new Date().toISOString(),
    priority: "medium",
    status: "pending",
  },
  {
    id: "req-2",
    branch_id: "branch-2",
    requester_id: "user-2",
    approver_id: null,
    file_id: null,
    name: "New Equipment",
    amount: 2,
    nominal: 5000000,
    date: new Date().toISOString(),
    priority: "high",
    status: "pending",
  },
  {
    id: "req-3",
    branch_id: "branch-1",
    requester_id: "user-3",
    approver_id: "user-1",
    file_id: null,
    name: "Team Lunch",
    amount: 10,
    nominal: 750000,
    date: new Date().toISOString(),
    priority: "low",
    status: "approved",
  },
];

export const getMockRequests = () => requests;

export const addMockRequest = (newRequest: any) => {
  const request: Request = {
    id: `req-${Date.now()}`,
    branch_id: newRequest.branch_id,
    requester_id: "user-1", // Mock current user
    approver_id: null,
    file_id: newRequest.file_id || null,
    name: newRequest.name,
    amount: newRequest.amount,
    nominal: newRequest.nominal,
    date: newRequest.date,
    priority: newRequest.priority,
    status: "pending",
  };

  requests = [request, ...requests];
};

export const updateMockRequestStatus = (
  id: string,
  status: "approved" | "rejected" | "disburse",
) => {
  requests = requests.map((req) =>
    req.id === id
      ? {
          ...req,
          status: status,
          approver_id: status !== "approved" ? "approver-1" : req.approver_id,
        }
      : req,
  );
};
