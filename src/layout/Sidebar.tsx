"use client";

import { LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { SIDEBAR_ITEMS } from "@/data/constants";
import { useAuth } from "@/context/AuthContext";

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <aside
      className={`bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? "w-16" : "w-60"}`}
    >
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center">
          {!isCollapsed && (
            <div className="flex items-center gap-5">
              <Image
                src="/wm-blue.svg"
                alt="FinanceHub Logo"
                width={64}
                height={64}
              />
              <div>
                <h1 className="font-semibold text-gray-900">FinanceHub</h1>
                <p className="text-xs text-gray-500">Budget Tracker</p>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 p-0"
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 p-3 space-y-1">
          {SIDEBAR_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-3 ${isCollapsed ? "" : "p-5"}`}
                >
                  <Icon
                    className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-600"}`}
                  />
                  {!isCollapsed && (
                    <span
                      className={`text-sm
                        ${isActive ? "text-gray-900 font-medium" : "text-gray-600"}
                      `}
                    >
                      {item.label}
                    </span>
                  )}
                </Button>
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-gray-200">
          <Button
            variant="ghost"
            className={`w-full justify-start gap-3 ${isCollapsed ? "" : "p-5"}`}
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 text-gray-600" />
            {!isCollapsed && <span className="text-gray-600">Logout</span>}
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
