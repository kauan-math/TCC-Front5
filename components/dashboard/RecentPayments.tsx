import { Card } from "@/components/ui/Index";

export default function RecentPayments() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold text-white">
        Pagamentos Recentes
      </h2>

      <div className="space-y-4">
        <div>
          <p className="font-medium text-white">Nenhum pagamento registrado</p>

          <span className="text-sm text-zinc-500">
            Os pagamentos aparecerão aqui.
          </span>
        </div>
      </div>
    </Card>
  );
}
