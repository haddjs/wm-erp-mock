// mocks/activity-log.ts (enhanced with more realistic data)
export interface MockActivityLog {
  id: string;
  type: string;
  title: string;
  description: string;
  created_at: string;
  email: string;
  branch_name: string;
  nominal: number;
  amount: number;
}

// Generate dates for the last 30 days
const getDateDaysAgo = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString();
};

const getTimeHoursAgo = (hours: number) => {
  const date = new Date();
  date.setHours(date.getHours() - hours);
  return date.toISOString();
};

export const getMockActivityLogs = (): MockActivityLog[] => {
  return [
    // Today's logs
    {
      id: "log-1",
      type: "expense_recorded",
      title: "Expense Recorded",
      description: "Added new expense: Internet Biznet Subscription",
      created_at: getTimeHoursAgo(2),
      email: "john.doe@example.com",
      branch_name: "Branch Jakarta",
      nominal: 500000,
      amount: 1,
    },
    {
      id: "log-2",
      type: "request_approved",
      title: "Request Approved",
      description: "Approved request: Office Supplies - Printer Cartridge",
      created_at: getTimeHoursAgo(5),
      email: "admin@example.com",
      branch_name: "Branch Jakarta",
      nominal: 0,
      amount: 0,
    },
    {
      id: "log-3",
      type: "request_created",
      title: "Request Created",
      description: "Created new request: New Laptop for Development Team",
      created_at: getTimeHoursAgo(8),
      email: "jane.smith@example.com",
      branch_name: "Branch Surabaya",
      nominal: 15000000,
      amount: 1,
    },

    // Yesterday's logs
    {
      id: "log-4",
      type: "expense_recorded",
      title: "Expense Recorded",
      description: "Added new expense: Team Lunch Meeting",
      created_at: getDateDaysAgo(1),
      email: "budi.wijaya@example.com",
      branch_name: "Branch Bandung",
      nominal: 750000,
      amount: 15,
    },
    {
      id: "log-5",
      type: "request_rejected",
      title: "Request Rejected",
      description: "Rejected request: Premium Software License",
      created_at: getDateDaysAgo(1),
      email: "admin@example.com",
      branch_name: "Branch Jakarta",
      nominal: 0,
      amount: 0,
    },
    {
      id: "log-6",
      type: "expense_updated",
      title: "Expense Updated",
      description: "Updated expense: Office Rent - Increased amount",
      created_at: getDateDaysAgo(1),
      email: "john.doe@example.com",
      branch_name: "Branch Jakarta",
      nominal: 25000000,
      amount: 1,
    },

    // 2 days ago
    {
      id: "log-7",
      type: "request_created",
      title: "Request Created",
      description: "Created new request: Marketing Materials for Campaign",
      created_at: getDateDaysAgo(2),
      email: "siti.nurhaliza@example.com",
      branch_name: "Branch Surabaya",
      nominal: 5000000,
      amount: 50,
    },
    {
      id: "log-8",
      type: "expense_recorded",
      title: "Expense Recorded",
      description: "Added new expense: Cloud Server Hosting",
      created_at: getDateDaysAgo(2),
      email: "john.doe@example.com",
      branch_name: "Branch Jakarta",
      nominal: 1200000,
      amount: 1,
    },

    // 3 days ago
    {
      id: "log-9",
      type: "request_approved",
      title: "Request Approved",
      description: "Approved request: Employee Training Workshop",
      created_at: getDateDaysAgo(3),
      email: "admin@example.com",
      branch_name: "Branch Bandung",
      nominal: 0,
      amount: 0,
    },
    {
      id: "log-10",
      type: "request_status_changed",
      title: "Status Changed",
      description: "Changed request status to approved: New Office Chairs",
      created_at: getDateDaysAgo(3),
      email: "manager@example.com",
      branch_name: "Branch Jakarta",
      nominal: 0,
      amount: 0,
    },

    // 5 days ago
    {
      id: "log-11",
      type: "expense_deleted",
      title: "Expense Deleted",
      description: "Deleted expense: Duplicate Office Supply Entry",
      created_at: getDateDaysAgo(5),
      email: "john.doe@example.com",
      branch_name: "Branch Surabaya",
      nominal: 250000,
      amount: 3,
    },
    {
      id: "log-12",
      type: "request_created",
      title: "Request Created",
      description: "Created new request: Emergency Generator Repair",
      created_at: getDateDaysAgo(5),
      email: "technical@example.com",
      branch_name: "Branch Jakarta",
      nominal: 3500000,
      amount: 1,
    },

    // 1 week ago
    {
      id: "log-13",
      type: "expense_recorded",
      title: "Expense Recorded",
      description: "Added new expense: Weekly Grocery Supplies",
      created_at: getDateDaysAgo(7),
      email: "siti.nurhaliza@example.com",
      branch_name: "Branch Bandung",
      nominal: 850000,
      amount: 25,
    },
    {
      id: "log-14",
      type: "request_approved",
      title: "Request Approved",
      description: "Approved request: AC Maintenance Service",
      created_at: getDateDaysAgo(7),
      email: "admin@example.com",
      branch_name: "Branch Surabaya",
      nominal: 0,
      amount: 0,
    },

    // 2 weeks ago
    {
      id: "log-15",
      type: "request_rejected",
      title: "Request Rejected",
      description: "Rejected request: Premium Coffee Machine",
      created_at: getDateDaysAgo(14),
      email: "finance@example.com",
      branch_name: "Branch Jakarta",
      nominal: 0,
      amount: 0,
    },
    {
      id: "log-16",
      type: "expense_recorded",
      title: "Expense Recorded",
      description: "Added new expense: Domain Renewal",
      created_at: getDateDaysAgo(14),
      email: "john.doe@example.com",
      branch_name: "Branch Jakarta",
      nominal: 350000,
      amount: 1,
    },

    // 3 weeks ago
    {
      id: "log-17",
      type: "request_created",
      title: "Request Created",
      description: "Created new request: New Projector for Meeting Room",
      created_at: getDateDaysAgo(21),
      email: "jane.smith@example.com",
      branch_name: "Branch Surabaya",
      nominal: 8500000,
      amount: 1,
    },
    {
      id: "log-18",
      type: "expense_updated",
      title: "Expense Updated",
      description: "Updated expense: Internet Package - Upgraded speed",
      created_at: getDateDaysAgo(21),
      email: "john.doe@example.com",
      branch_name: "Branch Jakarta",
      nominal: 750000,
      amount: 1,
    },

    // 1 month ago
    {
      id: "log-19",
      type: "request_approved",
      title: "Request Approved",
      description: "Approved request: Yearly Software Subscription",
      created_at: getDateDaysAgo(30),
      email: "admin@example.com",
      branch_name: "Branch Jakarta",
      nominal: 0,
      amount: 0,
    },
    {
      id: "log-20",
      type: "expense_recorded",
      title: "Expense Recorded",
      description: "Added new expense: Annual Insurance Premium",
      created_at: getDateDaysAgo(30),
      email: "finance@example.com",
      branch_name: "Branch Bandung",
      nominal: 12000000,
      amount: 1,
    },
  ];
};

// Optional: Function to add a new log dynamically
export const addMockActivityLog = (log: Partial<MockActivityLog>) => {
  // This is for future use if you want to add logs dynamically
  const newLog: MockActivityLog = {
    id: `log-${Date.now()}`,
    type: log.type || "user_action",
    title: log.title || "Activity",
    description: log.description || "",
    created_at: new Date().toISOString(),
    email: log.email || "system@example.com",
    branch_name: log.branch_name || "Unknown Branch",
    nominal: log.nominal || 0,
    amount: log.amount || 0,
  };

  // In a real implementation, you'd add this to an array
  // For now, just return the new log
  return newLog;
};
