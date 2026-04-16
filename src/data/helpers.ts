export const getStatusVariant = (status: string) => {
  if (status === "approved") {
    return "success";
  } else if (status === "rejected") {
    return "destructive";
  } else if (status === "pending") {
    return "warning";
  } else if (status === "disburse") {
    return "outline";
  } else {
    return "default";
  }
};

export const getPriorityVariant = (priority: string) => {
  if (priority === "high") {
    return "destructive";
  } else if (priority === "medium") {
    return "warning";
  } else if (priority === "low") {
    return "success";
  } else {
    return "default";
  }
};
