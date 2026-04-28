import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-6 bg-gray-900 text-white font-bold">
      <Link href="/" className="hover:text-blue-400">Início</Link>
      <Link href="/sobre" className="hover:text-blue-400">Sobre</Link>
      <Link href="/projetos" className="hover:text-blue-400">Projetos</Link>
    </nav>
  );
}