"use client";

import { Search, Bell, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        items-center
        justify-between
        border-b
        border-zinc-800
        bg-zinc-950/90
        px-8
        py-5
        backdrop-blur
      "
    >
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-zinc-500
          "
        />

        <input
          placeholder="Pesquisar..."
          className="
            w-full
            rounded-xl
            border
            border-zinc-800
            bg-zinc-900
            py-3
            pl-11
            pr-4
            text-white
            outline-none
            transition
            focus:border-yellow-400
          "
        />
      </div>

      <div className="flex items-center gap-5">
        <button
          className="
            rounded-xl
            bg-zinc-900
            p-3
            text-zinc-400
            transition
            hover:text-white
          "
        >
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3">
          <UserCircle size={40} className="text-yellow-400" />

          <div>
            <p className="font-semibold text-white">Administrador</p>

            <p className="text-sm text-zinc-500">admin@gymflow.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
