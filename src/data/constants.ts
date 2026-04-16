import {
  LayoutDashboard,
  Wallet,
  FileClock,
  PieChart,
  FileCheck,
  Clock,
  CheckCircle,
  XCircle,
  DollarSign,
  Activity,
  Receipt,
  FileText,
  User,
} from "lucide-react";

export const SIDEBAR_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Wallet, label: "Budgets", path: "/budgets" },
  { icon: FileClock, label: "Activity Log", path: "/logs" },
  { icon: FileCheck, label: "Approvals", path: "/approvals" },
  { icon: PieChart, label: "Reports", path: "/reports" },
];

export const APPROVAL_PRIORITY = ["High", "Medium", "Low"];
export const STATUS_PRIORITY = ["Rejected", "Pending", "Approved"];

export const APPROVAL_STATS = [
  {
    label: "Pending",
    icon: Clock,
    color: "text-yellow-400",
    total: "4",
  },
  {
    label: "Approved",
    icon: CheckCircle,
    color: "text-green-600",
    total: "3",
  },
  {
    label: "Rejected",
    icon: XCircle,
    color: "text-red-600",
    total: "8",
  },
  {
    label: "Total Amount",
    icon: DollarSign,
    color: "text-blue-600",
    total: "$66K",
  },
];

export const LOGS_STATS = [
  {
    label: "Total Activities",
    icon: Activity,
    color: "text-yellow-400",
    total: "4",
  },
  {
    label: "Expenses Recorded",
    icon: Receipt,
    color: "text-purple-600",
    total: "4",
  },
  {
    label: "Approved",
    icon: CheckCircle,
    color: "text-green-600",
    total: "3",
  },
  {
    label: "Rejected",
    icon: XCircle,
    color: "text-red-600",
    total: "8",
  },
];

export const APPROVAL_REQUEST = [
  {
    id: "REQ-001",
    requestedBy: "Budi Santoso",
    requestedDate: "2024-06-03",
    amount: 300.0,
    category: "Software",
    department: "IT",
    branch: "Pemuda",
    description: "Software Subscription",
    justification: "Monthly subscription for development tools and licenses",
    expectedDate: "2024-06-10",
    status: "pending",
    priority: "medium",
  },
  {
    id: "REQ-002",
    requestedBy: "Siti Aminah",
    requestedDate: "2024-06-04",
    amount: 150.5,
    category: "Supplies",
    department: "General Affairs",
    branch: "Pemuda",
    description: "Office Supplies",
    justification: "Stationery and consumables for daily operations",
    expectedDate: "2024-06-11",
    status: "approved",
    priority: "low",
  },
  {
    id: "REQ-003",
    requestedBy: "Agus Wijaya",
    requestedDate: "2024-06-05",
    amount: 500.0,
    category: "Utilities",
    department: "Facility Management",
    branch: "Bandung",
    description: "Utilities Payment",
    justification: "Electricity and water bill for Bandung branch",
    expectedDate: "2024-06-12",
    status: "pending",
    priority: "high",
  },
  {
    id: "REQ-004",
    requestedBy: "Dewi Kartika",
    requestedDate: "2024-06-06",
    amount: 1200.0,
    category: "Maintenance",
    department: "Operations",
    branch: "BSD",
    description: "Equipment Maintenance",
    justification: "Preventive maintenance for office equipment",
    expectedDate: "2024-06-13",
    status: "pending",
    priority: "medium",
  },
  {
    id: "REQ-005",
    requestedBy: "Eko Prasetyo",
    requestedDate: "2024-06-07",
    amount: 2500.0,
    category: "Marketing",
    department: "Marketing",
    branch: "Kemang",
    description: "Marketing Campaign",
    justification: "Q2 digital advertising campaign",
    expectedDate: "2024-06-20",
    status: "approved",
    priority: "high",
  },
  {
    id: "REQ-006",
    requestedBy: "Rina Marlina",
    requestedDate: "2024-06-08",
    amount: 800.0,
    category: "Training",
    department: "Human Resources",
    branch: "Kebayoran",
    description: "Staff Training",
    justification: "Customer service excellence workshop",
    expectedDate: "2024-06-15",
    status: "pending",
    priority: "medium",
  },
  {
    id: "REQ-007",
    requestedBy: "Hendra Gunawan",
    requestedDate: "2024-06-09",
    amount: 3000.0,
    category: "Rent",
    department: "General Affairs",
    branch: "Cibubur",
    description: "Rent Payment",
    justification: "Monthly office rent for Cibubur branch",
    expectedDate: "2024-06-16",
    status: "approved",
    priority: "high",
  },
  {
    id: "REQ-008",
    requestedBy: "Nina Susanti",
    requestedDate: "2024-06-10",
    amount: 450.0,
    category: "Insurance",
    department: "Finance",
    branch: "Puri",
    description: "Insurance Premium",
    justification: "Annual property insurance renewal",
    expectedDate: "2024-06-17",
    status: "pending",
    priority: "low",
  },
  {
    id: "REQ-009",
    requestedBy: "Rizki Febrian",
    requestedDate: "2024-06-11",
    amount: 350.0,
    category: "Services",
    department: "Facility Management",
    branch: "Surabaya",
    description: "Cleaning Services",
    justification: "Monthly cleaning service for Surabaya branch",
    expectedDate: "2024-06-18",
    status: "rejected",
    priority: "low",
  },
  {
    id: "REQ-010",
    requestedBy: "Maya Sari",
    requestedDate: "2024-06-12",
    amount: 200.0,
    category: "Utilities",
    department: "IT",
    branch: "Bandung",
    description: "Internet Bill",
    justification: "Monthly fiber optic internet subscription",
    expectedDate: "2024-06-19",
    status: "pending",
    priority: "medium",
  },
];

export const LOG_ACTION = {
  //expenses
  expense_recorded: {
    label: "Expense Recorded",
    icon: Receipt,
    className: "bg-blue-100 text-blue-800",
  },
  expense_updated: {
    label: "Expense Updated",
    icon: Receipt,
    className: "bg-blue-100 text-blue-800",
  },
  expense_deleted: {
    label: "Expense Deleted",
    icon: Receipt,
    className: "bg-red-100 text-red-800",
  },

  //request
  request_created: {
    label: "Request Created",
    icon: FileText,
    className: "bg-purple-100 text-purple-800",
  },
  request_approved: {
    label: "Request Approved",
    icon: CheckCircle,
    className: "bg-green-100 text-green-800",
  },
  request_rejected: {
    label: "Request Rejected",
    icon: XCircle,
    className: "bg-red-100 text-red-800",
  },
  request_cancelled: {
    label: "Request Cancelled",
    icon: XCircle,
    className: "bg-gray-100 text-gray-800",
  },
  request_status_changed: {
    label: "Request Updated",
    icon: Activity,
    className: "bg-yellow-100 text-yellow-800",
  },
} as const;

export type ActionType =
  | "expense_recorded"
  | "expense_updated"
  | "expense_deleted"
  | "request_created"
  | "request_approved"
  | "request_rejected"
  | "request_cancelled"
  | "request_status_changed";
