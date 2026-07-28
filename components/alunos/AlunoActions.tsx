"use client";

import { Button, SearchInput } from "@/components/ui/Index";

interface AlunoActionsProps {
  onNew?: () => void;
}

export default function AlunoActions({ onNew }: AlunoActionsProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="w-full max-w-md">
        <SearchInput placeholder="Pesquisar aluno..." />
      </div>

      <Button onClick={onNew}>+ Novo Aluno</Button>
    </div>
  );
}
