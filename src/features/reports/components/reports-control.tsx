"use client";

import { Input } from "@/components/ui/input";
import { ChevronDown, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Branch } from "@/types";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

type ReportsControlProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  selectedBranch: string;
  setSelectedBranch: React.Dispatch<React.SetStateAction<string>>;
  branches: Branch[];
};

const ReportsControl = ({
  search,
  setSearch,
  selectedBranch,
  setSelectedBranch,
  branches,
}: ReportsControlProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Input
          placeholder="Search..."
          className="w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center gap-3 border-gray-400 border-2 px-4 py-1 rounded-lg text-sm cursor-pointer">
              <span>
                {selectedBranch === "All Branches"
                  ? "All Branches"
                  : branches.find((b) => b.id === selectedBranch)?.name}
              </span>
              <ChevronDown className="w-5 h-5" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem
              onClick={() => setSelectedBranch("All Branches")}
              className="p-2"
            >
              All Branches
            </DropdownMenuItem>
            {branches.map((branch) => (
              <DropdownMenuItem
                key={branch.id}
                onClick={() => setSelectedBranch(branch.id)}
                className={`p-2 cursor-pointer ${selectedBranch === branch.id ? "bg-gray-100" : ""}`}
              >
                {branch.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Button>
        <Upload />
        Export
      </Button>
    </div>
  );
};

export default ReportsControl;
