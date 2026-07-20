import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://lucasalbuquerque.com.br"),
  title: "Lucas Albuquerque | Ciência, propósito e superação",
  description: "Portfólio de Lucas Albuquerque — biomédico, acadêmico de Medicina, pesquisador e autor.",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: { title: "Lucas Albuquerque | Ciência, propósito e superação", description: "Pesquisa, educação e projetos que transformam conhecimento em impacto positivo.", type: "website", locale: "pt_BR" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={manrope.variable}>{children}</body></html>;
}
