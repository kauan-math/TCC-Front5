"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import SidebarItem from "./SidebarItem";

import {
  LayoutDashboard,
  Users,
  Dumbbell,
  CreditCard,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  BarChart3,
} from "lucide-react";

const menu = [
  {
    title: "GERAL",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        label: "Alunos",
        href: "/alunos",
        icon: Users,
      },
      {
        label: "Treinos",
        href: "/treinos",
        icon: Dumbbell,
      },
    ],
  },
  {
    title: "FINANCEIRO",
    items: [
      {
        label: "Mensalidades",
        href: "/mensalidades",
        icon: CreditCard,
      },
      {
        label: "Relatórios",
        href: "/relatorios",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "SISTEMA",
    items: [
      {
        label: "Configurações",
        href: "/configuracoes",
        icon: Settings,
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        flex
        flex-col
        border-r
        border-zinc-800
        bg-zinc-900
        transition-all
        duration-300
        ${collapsed ? "w-20" : "w-72"}
      `}
    >
      {/* Cabeçalho */}
      <div className="flex items-center justify-between border-b border-zinc-800 p-5">
        {!collapsed && (
          <Link href="/">
            <div>
              <h1 className="text-2xl font-bold text-yellow-400">GymFlow</h1>

              <p className="text-xs text-zinc-500">Sistema para Academias</p>
            </div>
          </Link>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            rounded-lg
            p-2
            text-zinc-400
            transition
            hover:bg-zinc-800
            hover:text-white
          "
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-3 py-5">
        {menu.map((section) => (
          <div key={section.title} className="mb-8">
            {!collapsed && (
              <h2 className="mb-3 px-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                {section.title}
              </h2>
            )}

            <div className="space-y-2">
              {section.items.map((item) => (
                <SidebarItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  active={pathname === item.href}
                  collapsed={collapsed}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Rodapé */}
      <div className="border-t border-zinc-800 p-4">
        {!collapsed ? (
          <>
            <div className="mb-4">
              <p className="font-semibold text-white">Administrador</p>

              <p className="text-sm text-zinc-500">admin@gymflow.com</p>
            </div>

            <button
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-red-500
                px-4
                py-2
                text-red-400
                transition
                hover:bg-red-500
                hover:text-white
              "
            >
              <LogOut size={18} />
              Sair
            </button>
          </>
        ) : (
          <button
            className="
              flex
              w-full
              justify-center
              rounded-lg
              border
              border-red-500
              p-2
              text-red-400
              transition
              hover:bg-red-500
              hover:text-white
            "
          >
            <LogOut size={18} />
          </button>
        )}
      </div>
    </aside>
  );
}
