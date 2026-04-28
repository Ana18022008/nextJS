import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-black text-white px-4">
      {/* Um detalhe de luz no fundo (Opcional, mas fica lindo) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>

      <div className="relative text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Bem-vindo ao meu <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Portfólio</span> 🚀
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Estudante de desenvolvimento web focado em criar interfaces modernas e funcionais com Next.js.
        </p>

        <div className="flex gap-4 justify-center">
          <Link 
            href="/projetos" 
            className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all shadow-lg"
          >
            Ver Projetos
          </Link>
          <Link 
            href="/sobre" 
            className="border border-gray-700 px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition-all"
          >
            Sobre Mim
          </Link>
        </div>
      </div>
    </main>
  );
}