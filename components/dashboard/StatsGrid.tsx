"use client";

import { CalendarCheck, CreditCard, Dumbbell, Users } from "lucide-react";

import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard title="Alunos" value="--" icon={Users} />

      <StatCard title="Treinos" value="--" icon={Dumbbell} />

      <StatCard title="Mensalidades" value="--" icon={CreditCard} />

      <StatCard title="Check-ins Hoje" value="--" icon={CalendarCheck} />
    </div>
  );
}
