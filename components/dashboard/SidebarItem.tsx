"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
  collapsed: boolean;
}

export default function SidebarItem({
  href,
  label,
  icon: Icon,
  active,
  collapsed,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`
        group relative flex items-center gap-3 rounded-xl px-3 py-3
        transition-all duration-200
        ${
          active
            ? "bg-yellow-400 text-black shadow-lg"
            : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
        }
      `}
    >
      <Icon size={22} className={active ? "text-black" : "text-inherit"} />

      {!collapsed && (
        <span className="font-medium whitespace-nowrap">{label}</span>
      )}

      {/* Tooltip */}
      {collapsed && (
        <div
          className="
            pointer-events-none
            absolute left-16
            rounded-lg
            bg-zinc-800
            px-3 py-2
            text-sm
            text-white
            opacity-0
            transition
            group-hover:opacity-100
            whitespace-nowrap
            z-50
          "
        >
          {label}
        </div>
      )}
    </Link>
  );
}
