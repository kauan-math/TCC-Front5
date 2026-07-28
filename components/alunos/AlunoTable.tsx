"use client";

import { alunos } from "@/components/data/aluno";

import {
  Card,
  EmptyState,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/Index";

import AlunoRow from "./AlunoRow";

export default function AlunoTable() {
  if (alunos.length === 0) {
    return (
      <Card>
        <EmptyState
          title="Nenhum aluno encontrado"
          description="Cadastre seu primeiro aluno."
        />
      </Card>
    );
  }

  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell header>Nome</TableCell>

            <TableCell header>Email</TableCell>

            <TableCell header>Plano</TableCell>

            <TableCell header>Status</TableCell>

            <TableCell header>Vencimento</TableCell>

            <TableCell header>Ações</TableCell>
          </TableRow>
        </TableHeader>

        <tbody>
          {alunos.map((aluno) => (
            <AlunoRow key={aluno.id} aluno={aluno} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
