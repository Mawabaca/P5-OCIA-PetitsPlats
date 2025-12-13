import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

export const metadata = {
  title: "Les Petits Plats",
  description:
    "Découvrez nos recettes du quotidien, simples et délicieuses avec Les Petits Plats.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${anton.variable} antialiased bg-slate-100 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
