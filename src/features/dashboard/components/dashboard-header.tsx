// "use client";

// import { useState } from "react";

// import { MapPin, ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";

// import { branchBudget } from "@/data/mock-data";

// const DashboardHeader = () => {
//   const [selectedBranch, setSelectedBranch] = useState("All Branches");

//   const branches = branchBudget;

//   return (
//     <div className="bg-white border-b border-gray-200 py-6 px-8">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
//           <p className="text-gray-600 mt-1 text-sm">
//             Financial overview and budget tracking
//           </p>
//         </div>

//         <div className="flex items-center gap-8">
//           <DropdownMenu>
//             <DropdownMenuTrigger>
//               <div className="flex items-center gap-3 border-gray-400 border-2 p-2 rounded-xl cursor-pointer">
//                 <MapPin className="w-4 h-4" />
//                 <span>{selectedBranch}</span>
//                 <ChevronDown className="w-3 h-3" />
//               </div>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="w-56">
//               <DropdownMenuItem
//                 onClick={() => setSelectedBranch("All Branches")}
//                 className="p-2"
//               >
//                 All Branches
//               </DropdownMenuItem>
//               {branches.map((branch) => (
//                 <DropdownMenuItem
//                   key={branch.id}
//                   onClick={() => setSelectedBranch(branch.name)}
//                   className="p-2 cursor-pointer"
//                 >
//                   {branch.name}
//                 </DropdownMenuItem>
//               ))}
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <div className="text-right">
//             <p className="text-sm text-gray-500">Current Period</p>
//             <p className="font-semibold text-gray-900">Q1 2026</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardHeader;

// features/dashboard/components/dashboard-header.tsx
"use client";

import { useState } from "react";

import { MapPin, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Branch } from "@/types";

type Props = {
  branches: Branch[];
};

const DashboardHeader = ({ branches }: Props) => {
  const [selectedBranch, setSelectedBranch] = useState("All Branches");

  return (
    <div className="bg-white border-b border-gray-200 py-6 px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1 text-sm">
            Financial overview and budget tracking
          </p>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-3 border-gray-400 border-2 px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-50">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{selectedBranch}</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem
                onClick={() => setSelectedBranch("All Branches")}
                className="p-2 cursor-pointer"
              >
                All Branches
              </DropdownMenuItem>
              {branches.map((branch) => (
                <DropdownMenuItem
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch.name)}
                  className="p-2 cursor-pointer"
                >
                  {branch.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="text-right">
            <p className="text-sm text-gray-500">Current Period</p>
            <p className="font-semibold text-gray-900">
              {new Date().toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
