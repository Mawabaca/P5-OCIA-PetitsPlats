import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
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
      <body
        className={`${poppins.variable} ${bebas.variable} antialiased bg-slate-100 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
