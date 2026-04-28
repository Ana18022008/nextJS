export default function Projetos() {
    const meusProjetos = [
      { nome: "Projeto 1", desc: "Um site incrível" },
      { nome: "Projeto 2", desc: "Uma aplicação útil" }
    ];
  
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-6">Meus Projetos</h1>
        <div className="grid gap-4">
          {meusProjetos.map((p) => (
            <div key={p.nome} className="p-4 border rounded shadow">
              <h2 className="text-xl font-semibold">{p.nome}</h2>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }