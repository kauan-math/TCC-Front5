"use client";

import { useState } from "react";

import { Aluno } from "@/components/types/aluno";
import { Button, FormField, Input, Select } from "@/components/ui/Index";

interface AlunoFormProps {
  onSubmit: (aluno: Aluno) => void;
}

export default function AlunoForm({ onSubmit }: AlunoFormProps) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    plano: "basic",
    status: "ativo",
    vencimento: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onSubmit({
      id: 0,
      nome: form.nome,
      email: form.email,
      telefone: form.telefone,
      plano: form.plano,
      status: form.status as "Ativo" | "Pendente" | "Inativo",
      vencimento: form.vencimento,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <FormField label="Nome completo">
        <Input
          name="nome"
          placeholder="Digite o nome completo"
          value={form.nome}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="E-mail">
        <Input
          type="email"
          name="email"
          placeholder="Digite o e-mail"
          value={form.email}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="Telefone">
        <Input
          name="telefone"
          placeholder="Digite o telefone"
          value={form.telefone}
          onChange={handleChange}
        />
      </FormField>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Plano">
          <Select
            name="plano"
            value={form.plano}
            onChange={handleChange}
            options={[
              {
                label: "Basic",
                value: "basic",
              },
              {
                label: "Gold",
                value: "gold",
              },
              {
                label: "Premium",
                value: "premium",
              },
            ]}
          />
        </FormField>

        <FormField label="Status">
          <Select
            name="status"
            value={form.status}
            onChange={handleChange}
            options={[
              {
                label: "Ativo",
                value: "ativo",
              },
              {
                label: "Pendente",
                value: "pendente",
              },
              {
                label: "Inativo",
                value: "inativo",
              },
            ]}
          />
        </FormField>
      </div>

      <FormField label="Vencimento">
        <Input
          type="date"
          name="vencimento"
          value={form.vencimento}
          onChange={handleChange}
        />
      </FormField>

      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="secondary">
          Cancelar
        </Button>

        <Button type="submit">Salvar Aluno</Button>
      </div>
    </form>
  );
}
