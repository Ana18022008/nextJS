import Navbar from '@/components/Navbar'; // Importando o menu
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />  {/* O menu aparece aqui */}
        {children}
      </body>
    </html>
  );
}