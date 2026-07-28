"use client";

import Sidebar from "@/components/navigation";
import { useState } from "react";
import {
  User,
  Lock,
  Building2,
  Bell,
  Camera,
  Save,
  Eye,
  EyeOff,
} from "lucide-react";

type Tab = "perfil" | "seguranca" | "academia" | "notificacoes";

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm text-zinc-400 mb-1">{children}</label>;
}

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled,
}: {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="
        w-full bg-zinc-800 border border-zinc-700
        text-white placeholder-zinc-500
        rounded-xl px-4 py-3
        focus:outline-none focus:border-blue-500
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
      "
    />
  );
}

function BotaoSalvar({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2
        bg-blue-500 hover:bg-blue-600
        text-white font-medium
        px-5 py-2.5 rounded-xl
        transition-colors duration-200
      "
    >
      <Save size={16} />
      Salvar alterações
    </button>
  );
}

function TabPerfil() {
  const [nome, setNome] = useState("Admin");
  const [email, setEmail] = useState("admin@gymflow.com");
  const [cargo, setCargo] = useState("Administrador");

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-white font-semibold text-lg mb-6">
        Informações do perfil
      </h2>

      <div className="flex items-center gap-5 mb-8">
        <div className="relative">
          <div
            className="
            w-20 h-20 rounded-full
            bg-blue-500
            flex items-center justify-center
            text-white text-2xl font-bold
          "
          >
            A
          </div>

          <button
            className="
            absolute bottom-0 right-0
            w-7 h-7 rounded-full
            bg-zinc-700 hover:bg-zinc-600
            flex items-center justify-center
            transition-colors
          "
          >
            <Camera size={14} className="text-white" />
          </button>
        </div>

        <div>
          <p className="text-white font-medium">{nome}</p>
          <p className="text-zinc-400 text-sm">{email}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <Label>Nome completo</Label>
          <Input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
          />
        </div>

        <div>
          <Label>E-mail</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <Label>Cargo</Label>
          <Input
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            placeholder="Ex: Administrador"
          />
        </div>

        <div>
          <Label>Nível de acesso</Label>
          <Input value="Admin" disabled />
        </div>
      </div>

      <BotaoSalvar />
    </div>
  );
}

function CampoSenha({
  label,
  campo,
  valor,
  mostrarSenha,
  onToggle,
  onChange,
}: {
  label: string;
  campo: string;
  valor: string;
  mostrarSenha: boolean;
  onToggle: () => void;
  onChange: (val: string) => void;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="relative">
        <input
          type={mostrarSenha ? "text" : "password"}
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          placeholder="••••••••"
          className="
            w-full bg-zinc-800 border border-zinc-700
            text-white placeholder-zinc-500
            rounded-xl px-4 py-3 pr-12
            focus:outline-none focus:border-blue-500
            transition-colors duration-200
          "
        />
        <button
          type="button"
          onClick={onToggle}
          className="
            absolute right-3 top-1/2 -translate-y-1/2
            text-zinc-400 hover:text-white
            transition-colors
          "
        >
          {mostrarSenha ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}

function TabSeguranca() {
  const [mostrar, setMostrar] = useState({
    atual: false,
    nova: false,
    confirmar: false,
  });

  const [senhas, setSenhas] = useState({
    atual: "",
    nova: "",
    confirmar: "",
  });

  function toggleMostrar(campo: keyof typeof mostrar) {
    setMostrar((prev) => ({ ...prev, [campo]: !prev[campo] }));
  }

  function handleSenhaChange(campo: keyof typeof senhas, valor: string) {
    setSenhas((prev) => ({ ...prev, [campo]: valor }));
  }

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-white font-semibold text-lg mb-6">Alterar senha</h2>

      <div className="flex flex-col gap-4 max-w-md mb-6">
        <CampoSenha
          label="Senha atual"
          campo="atual"
          valor={senhas.atual}
          mostrarSenha={mostrar.atual}
          onToggle={() => toggleMostrar("atual")}
          onChange={(val) => handleSenhaChange("atual", val)}
        />
        <CampoSenha
          label="Nova senha"
          campo="nova"
          valor={senhas.nova}
          mostrarSenha={mostrar.nova}
          onToggle={() => toggleMostrar("nova")}
          onChange={(val) => handleSenhaChange("nova", val)}
        />
        <CampoSenha
          label="Confirmar nova senha"
          campo="confirmar"
          valor={senhas.confirmar}
          mostrarSenha={mostrar.confirmar}
          onToggle={() => toggleMostrar("confirmar")}
          onChange={(val) => handleSenhaChange("confirmar", val)}
        />
      </div>

      <div className="bg-zinc-800 rounded-xl p-4 mb-6 border border-zinc-700">
        <p className="text-zinc-400 text-sm">
          🔒 Use ao menos 8 caracteres, incluindo letras maiúsculas, números e
          símbolos.
        </p>
      </div>

      <BotaoSalvar />
    </div>
  );
}

function TabAcademia() {
  const [dados, setDados] = useState({
    nome: "GymFlow Academia",
    cnpj: "",
    telefone: "",
    endereco: "",
    cidade: "",
    horario: "06:00 - 22:00",
  });

  function atualizar(campo: keyof typeof dados, valor: string) {
    setDados((prev) => ({ ...prev, [campo]: valor }));
  }

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-white font-semibold text-lg mb-6">
        Dados da academia
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="col-span-2">
          <Label>Nome da academia</Label>
          <Input
            value={dados.nome}
            onChange={(e) => atualizar("nome", e.target.value)}
          />
        </div>

        <div>
          <Label>CNPJ</Label>
          <Input
            value={dados.cnpj}
            type="number"
            onChange={(e) => atualizar("cnpj", e.target.value)}
            placeholder="00.000.000/0000-00"
          />
        </div>

        <div>
          <Label>Telefone</Label>
          <Input
            value={dados.telefone}
            type="number"
            onChange={(e) => atualizar("telefone", e.target.value)}
            placeholder="(41) 99999-9999"
          />
        </div>

        <div className="col-span-2">
          <Label>Endereço</Label>
          <Input
            value={dados.endereco}
            onChange={(e) => atualizar("endereco", e.target.value)}
            placeholder="Rua, número, bairro"
          />
        </div>

        <div>
          <Label>Cidade</Label>
          <Input
            value={dados.cidade}
            onChange={(e) => atualizar("cidade", e.target.value)}
            placeholder="Curitiba"
          />
        </div>

        <div>
          <Label>Horário de funcionamento</Label>
          <Input
            value={dados.horario}
            onChange={(e) => atualizar("horario", e.target.value)}
            placeholder="06:00 - 22:00"
          />
        </div>
      </div>

      <BotaoSalvar />
    </div>
  );
}

function Toggle({ ativo, onChange }: { ativo: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`
        relative w-12 h-6 rounded-full transition-colors duration-200
        ${ativo ? "bg-blue-500" : "bg-zinc-700"}
      `}
    >
      <span
        className={`
          absolute top-1 w-4 h-4 rounded-full bg-white
          transition-transform duration-200
          ${ativo ? "translate-x-1" : "-translate-x-4.5"}
        `}
      />
    </button>
  );
}

function TabNotificacoes() {
  const [notifs, setNotifs] = useState({
    mensalidadesVencidas: false,
    novosAlunos: false,
    treinosAtualizados: false,
    checkinsHoje: false,
  });

  function toggle(campo: keyof typeof notifs) {
    setNotifs((prev) => ({ ...prev, [campo]: !prev[campo] }));
  }

  const opcoes: {
    chave: keyof typeof notifs;
    titulo: string;
    descricao: string;
  }[] = [
    {
      chave: "mensalidadesVencidas",
      titulo: "Mensalidades vencidas",
      descricao:
        "Receba alertas quando um aluno estiver com pagamento em atraso.",
    },
    {
      chave: "novosAlunos",
      titulo: "Novos alunos cadastrados",
      descricao: "Notificação ao cadastrar um novo aluno no sistema.",
    },
    {
      chave: "treinosAtualizados",
      titulo: "Treinos atualizados",
      descricao: "Alerta quando um treino for editado ou criado.",
    },
    {
      chave: "checkinsHoje",
      titulo: "Check-ins do dia",
      descricao: "Resumo diário de check-ins na academia.",
    },
  ];

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-white font-semibold text-lg mb-6">
        Preferências de notificação
      </h2>

      <div className="flex flex-col gap-1">
        {opcoes.map((opcao, i) => (
          <div key={opcao.chave}>
            {i > 0 && <div className="border-t border-zinc-800 my-3" />}

            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium text-sm">{opcao.titulo}</p>
                <p className="text-zinc-400 text-xs mt-0.5">
                  {opcao.descricao}
                </p>
              </div>

              <Toggle
                ativo={notifs[opcao.chave]}
                onChange={() => toggle(opcao.chave)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <BotaoSalvar />
      </div>
    </div>
  );
}

export default function ConfiguracoesPage() {
  const [abaAtiva, setAbaAtiva] = useState<Tab>("perfil");

  const abas: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "perfil", label: "Perfil", icon: User },
    { id: "seguranca", label: "Segurança", icon: Lock },
    { id: "academia", label: "Academia", icon: Building2 },
    { id: "notificacoes", label: "Notificações", icon: Bell },
  ];

  return (
    <div className="flex w-screen h-screen bg-zinc-950">
      <Sidebar />

      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Configurações</h1>

        <div className="flex gap-2 mb-6 border-b border-zinc-800 pb-3">
          {abas.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setAbaAtiva(id)}
              className={`
                flex items-center gap-2
                px-4 py-2 rounded-xl text-sm font-medium
                transition-all duration-200
                ${
                  abaAtiva === id
                    ? "bg-blue-500 text-white"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }
              `}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>

        {abaAtiva === "perfil" && <TabPerfil />}
        {abaAtiva === "seguranca" && <TabSeguranca />}
        {abaAtiva === "academia" && <TabAcademia />}
        {abaAtiva === "notificacoes" && <TabNotificacoes />}
      </main>
    </div>
  );
}
