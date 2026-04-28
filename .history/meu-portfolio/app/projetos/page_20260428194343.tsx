import Link from 'next/link';

export default function Projetos() {
  const meusProjetos = [
    { 
      nome: "Projeto 1", 
      desc: "Um site incrível feito com React.", 
      url: "https://github.com/seu-usuario/projeto-1" 
    },
    { 
      nome: "Projeto 2", 
      desc: "Uma aplicação útil com Next.js.", 
      url: "https://github.com/seu-usuario/projeto-2" 
    },
    { 
      nome: "Meu GitHub", 
      desc: "Veja todos os meus repositórios.", 
      url: "https://github.com/seu-usuario" 
    }
  ];

  return (
    <main className="p-10 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Meus Projetos</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {meusProjetos.map((p) => (
          <div key={p.nome} className="p-6 border border-gray-700 rounded-lg bg-gray-900 shadow-md flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-blue-400">{p.nome}</h2>
              <p className="mt-2 text-gray-300">{p.desc}</p>
            </div>
            
            {/* Botão de Link */}
            <Link 
              href={p.url} 
              target="_blank" // Abre em uma nova aba
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center font-medium"
            >
              Ver no GitHub
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}