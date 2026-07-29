import Image from "next/image";
import Link from "next/link";

const horarios = [
  { dia: "Segunda a Sexta", horario: "06:00 - 22:00" },
  { dia: "Sábado", horario: "08:00 - 18:00" },
  { dia: "Domingo e Feriados", horario: "08:00 - 13:00" },
];

const planos = [
  {
    nome: "Mensal",
    preco: "R$ 99,90",
    periodo: "/mês",
    destaque: false,
    beneficios: [
      "Acesso à academia",
      "Aulas em grupo",
      "Avaliação física inicial",
    ],
  },
  {
    nome: "Trimestral",
    preco: "R$ 89,90",
    periodo: "/mês",
    destaque: true,
    beneficios: [
      "Acesso à academia",
      "Aulas em grupo ilimitadas",
      "Avaliação física a cada 45 dias",
      "1 treino personalizado por mês",
    ],
  },
  {
    nome: "Anual",
    preco: "R$ 79,90",
    periodo: "/mês",
    destaque: false,
    beneficios: [
      "Acesso à academia",
      "Aulas em grupo ilimitadas",
      "Avaliação física mensal",
      "Treino personalizado",
      "Acesso a todas as unidades",
    ],
  },
];

const estrutura = [
  {
    titulo: "Musculação",
    descricao: "Equipamentos de última geração para todos os níveis.",
  },
  {
    titulo: "Cross Training",
    descricao: "Espaço dedicado para treinos funcionais de alta intensidade.",
  },
  {
    titulo: "Aulas Coletivas",
    descricao: "Spinning, jump, dança e muito mais, todos os dias.",
  },
  {
    titulo: "Vestiários",
    descricao: "Armários individuais, chuveiros e climatização completa.",
  },
];

export default function AcademiaPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header simples */}
      <header className="border-b border-zinc-800/70 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="GymFlow"
              width={36}
              height={36}
              priority
            />
            <span className="text-lg font-bold tracking-wide text-white">
              Gym<span className="text-yellow-400">Flow</span>
            </span>
          </Link>

          <Link
            href="/login"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-yellow-400"
          >
            Sair
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        className="
          relative overflow-hidden
          bg-[radial-gradient(circle_at_top,_theme(colors.zinc.900)_0%,_theme(colors.black)_70%)]
          px-4 py-16
        "
      >
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Bem-vindo de volta à{" "}
            <span className="text-yellow-400">GymFlow</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
            Confira tudo o que você precisa saber sobre a academia: horários,
            planos, estrutura e formas de contato.
          </p>
        </div>
      </section>

      {/* Horários */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Horário de <span className="text-yellow-400">funcionamento</span>
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {horarios.map((item) => (
            <div
              key={item.dia}
              className="rounded-xl border border-zinc-800/70 bg-zinc-950 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {item.dia}
              </p>
              <p className="mt-2 text-lg font-bold text-white">
                {item.horario}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Estrutura */}
      <section className="mx-auto max-w-6xl px-4 py-4">
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Nossa <span className="text-yellow-400">estrutura</span>
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {estrutura.map((item) => (
            <div
              key={item.titulo}
              className="
                rounded-xl border border-zinc-800/70 bg-zinc-950 p-5
                transition-colors hover:border-yellow-400/40
              "
            >
              <h3 className="font-bold text-white">{item.titulo}</h3>
              <p className="mt-2 text-sm text-zinc-400">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Planos */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Nossos <span className="text-yellow-400">planos</span>
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {planos.map((plano) => (
            <div
              key={plano.nome}
              className={`
                relative rounded-2xl border p-6
                ${
                  plano.destaque
                    ? "border-yellow-400 bg-zinc-950 shadow-lg shadow-yellow-400/10"
                    : "border-zinc-800/70 bg-zinc-950"
                }
              `}
            >
              {plano.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
                  Mais popular
                </span>
              )}

              <h3 className="text-lg font-bold text-white">{plano.nome}</h3>

              <div className="mt-3 flex items-end gap-1">
                <span className="text-3xl font-extrabold text-yellow-400">
                  {plano.preco}
                </span>
                <span className="mb-1 text-sm text-zinc-500">
                  {plano.periodo}
                </span>
              </div>

              <ul className="mt-5 flex flex-col gap-2.5">
                {plano.beneficios.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-zinc-400"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <button
                className={`
                  mt-6 w-full rounded-lg py-2.5 text-sm font-bold transition-colors
                  ${
                    plano.destaque
                      ? "bg-yellow-400 text-black hover:bg-yellow-300"
                      : "border border-zinc-700 text-white hover:border-yellow-400/50"
                  }
                `}
              >
                Escolher plano
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contato / Localização */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950 p-8 sm:p-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Fale <span className="text-yellow-400">conosco</span>
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Endereço
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                Av. Exemplo, 1234 - Centro
                <br />
                Curitiba - PR, 80000-000
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Telefone
              </p>
              <p className="mt-2 text-sm text-zinc-300">(41) 99999-9999</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                E-mail
              </p>
              <p className="mt-2 text-sm text-zinc-300">contato@gymflow.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
