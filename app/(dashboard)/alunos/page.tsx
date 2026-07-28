"use client";

import PageHeader from "@/components/dashboard/PageHeader";

import AlunoActions from "@/components/alunos/AlunoActions";
import AlunoModal from "@/components/alunos/AlunoModal";
import AlunoTable from "@/components/alunos/AlunoTable";
import { Pagination } from "@/components/ui/Index";
import useAlunos from "@/hooks/useAlunos";

export default function AlunosPage() {
  const { alunos, modalOpen, abrirNovoAluno, fecharModal, adicionarAluno } =
    useAlunos();

  return (
    <div className="space-y-8 p-8">
      <PageHeader
        title="Alunos"
        description="Gerencie todos os alunos da academia."
      />

      <AlunoActions onNew={abrirNovoAluno} />

      <AlunoTable />

      <Pagination page={1} totalPages={1} />

      <AlunoModal
        open={modalOpen}
        onClose={fecharModal}
        onSubmit={adicionarAluno}
      />
    </div>
  );
}
