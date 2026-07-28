"use client";

import { Pencil, Trash2 } from "lucide-react";

import { Badge, TableCell, TableRow } from "@/components/ui/Index";

import { Aluno } from "@/components/types/aluno";

interface Props {
  aluno: Aluno;
}

export default function AlunoRow({ aluno }: Props) {
  return (
    <TableRow>
      <TableCell>{aluno.nome}</TableCell>

      <TableCell>{aluno.email}</TableCell>

      <TableCell>{aluno.plano}</TableCell>

      <TableCell>
        <Badge
          color={
            aluno.status === "Ativo"
              ? "green"
              : aluno.status === "Pendente"
                ? "yellow"
                : "red"
          }
        >
          {aluno.status}
        </Badge>
      </TableCell>

      <TableCell>{aluno.vencimento}</TableCell>

      <TableCell>
        <div className="flex gap-3">
          <button className="text-blue-400 hover:text-blue-300">
            <Pencil size={18} />
          </button>

          <button className="text-red-400 hover:text-red-300">
            <Trash2 size={18} />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
}
