
import { Inter } from "next/font/google";
import "./globals.css";

import MainLayout from "./main-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yoga Center Obersulm | Michael Frisch",
  description: "Egal ob du gerade erst mit Yoga beginnen willst oder schon langjährige Praxis hast, ob du jung oder alt bist – hier ist ein Ort, der dir hilft zu entspannen, bei dir selbst anzukommen und die Seele baumeln zu lassen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/icon.png"  type="image/png" sizes="any" />
      </head>
      <body className={inter.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
