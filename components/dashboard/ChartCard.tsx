"use client";

import Link from "next/link";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Button, Card } from "@/components/ui/Index";

const data = [
  { mes: "Jan", alunos: 400 },
  { mes: "Fev", alunos: 300 },
  { mes: "Mar", alunos: 500 },
  { mes: "Abr", alunos: 200 },
  { mes: "Mai", alunos: 350 },
];

export default function ChartCard() {
  return (
    <Card>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Crescimento de alunos
          </h2>

          <p className="mt-1 text-sm text-zinc-400">Últimos cinco meses</p>
        </div>

        <Link href="/dashboard/editarGrafico">
          <Button>Editar gráfico</Button>
        </Link>
      </div>

      <ResponsiveContainer width="100%" height={330}>
        <BarChart data={data}>
          <CartesianGrid stroke="#27272a" strokeDasharray="3 3" />

          <XAxis dataKey="mes" stroke="#a1a1aa" />

          <YAxis stroke="#a1a1aa" />

          <Tooltip />

          <Bar dataKey="alunos" fill="#facc15" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
