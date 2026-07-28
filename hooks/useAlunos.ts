"use client";

import { Aluno } from "@/components/types/aluno";
import { useState } from "react";

export default function useAlunos() {
  function adicionarAluno(aluno: Aluno) {
    setAlunos((listaAtual) => [
      ...listaAtual,
      {
        ...aluno,
        id: Date.now(),
      },
    ]);

    fecharModal();
  }
  const [modalOpen, setModalOpen] = useState(false);

  const [alunoSelecionado, setAlunoSelecionado] = useState<Aluno | null>(null);

  function abrirNovoAluno() {
    setAlunoSelecionado(null);
    setModalOpen(true);
  }

  function fecharModal() {
    setModalOpen(false);
    setAlunoSelecionado(null);
  }

  return {
    alunos,

    modalOpen,

    alunoSelecionado,

    abrirNovoAluno,

    fecharModal,

    adicionarAluno,
  };
}
