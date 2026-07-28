import Card from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "text-yellow-400",
}: StatCardProps) {
  return (
    <Card hover>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">{title}</p>

          <h2 className="mt-3 text-4xl font-bold text-white">{value}</h2>
        </div>

        <div className={`rounded-xl bg-zinc-800 p-3 ${color}`}>
          <Icon size={28} />
        </div>
      </div>
    </Card>
  );
}
