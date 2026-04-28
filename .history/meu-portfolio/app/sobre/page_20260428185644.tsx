import Image from 'next/image';

export default function Sobre() {
  return (
    <main className="p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
      <Image 
        src="/perfil.png" 
        alt="Minha foto" 
        width={150} 
        height={150} 
        className="rounded-full"
      />
      <p className="mt-4 max-w-md text-center">
        Olá! Sou um desenvolvedor em busca de desafios. Adoro criar interfaces modernas.
      </p>
    </main>
  );
}