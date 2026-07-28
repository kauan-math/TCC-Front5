"use client";

import { Modal } from "@/components/ui/Index";
import AlunoForm from "./AlunoForm";

import { Aluno } from "@/components/types/aluno";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (aluno: Aluno) => void;
}

export default function AlunoModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose} title="Novo Aluno">
      <AlunoForm onSubmit={onSubmit} />
    </Modal>
  );
}
