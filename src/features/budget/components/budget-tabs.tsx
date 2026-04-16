import { Wallet, Receipt, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  activeTab: string;
  setActiveTab: (tab: any) => void;
};

const BudgetTabs = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div className="flex gap-4 mt-6">
      <Button
        variant={activeTab === "expenses" ? "default" : "outline"}
        onClick={() => setActiveTab("expenses")}
      >
        <Wallet className="w-4 h-4 mr-2" />
        Expenses
      </Button>
      <Button
        variant={activeTab === "request" ? "default" : "outline"}
        onClick={() => setActiveTab("request")}
      >
        <Receipt className="w-4 h-4 mr-2" />
        Request
      </Button>
    </div>
  );
};

export default BudgetTabs;
