"use client";

import ChartCard from "@/components/dashboard/ChartCard";
import PageHeader from "@/components/dashboard/PageHeader";
import RecentPayments from "@/components/dashboard/RecentPayments";
import RecentStudents from "@/components/dashboard/RecentStudents";
import StatsGrid from "@/components/dashboard/StatsGrid";

export default function DashboardPage() {
  return (
    <div className="space-y-8 p-8">
      <PageHeader
        title="Dashboard"
        description="Bem-vindo de volta ao GymFlow 👋"
      />
      <StatsGrid />
      <ChartCard />
      <div className="grid gap-6 xl:grid-cols-2">
        <RecentStudents />
        <RecentPayments />
      </div>
    </div>
  );
}
