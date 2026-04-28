import Image from 'next/image';

export default function Sobre() {
  return (
    <main className="p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Sobre Mim</h1>
      
      {}
      <Image 
        src= "/foto"
        alt="Minha foto"
        width={200}
        height={200}
        className="rounded-full border-4 border-blue-500"
      />
      
      <p className="mt-6 text-lg max-w-xl text-center">
        Escreva aqui um pouco sobre você. Estou aprendendo Next.js e este é meu primeiro projeto oficial!
      </p>
    </main>
  );
}