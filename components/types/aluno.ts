export interface Aluno {
  id: number;

  nome: string;

  email: string;

  telefone: string;

  plano: string;

  status: "Ativo" | "Pendente" | "Inativo";

  vencimento: string;
}
