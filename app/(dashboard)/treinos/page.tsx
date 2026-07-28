import Sidebar from "@/components/navigation";

export default function TreinosPage() {
  return (
    <div className="flex w-screen h-screen bg-zinc-950">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Treinos</h1>
      </main>
    </div>
  );
}
