import "@/styles/globals.css";

export const metadata = {
  title: "TiendaFy - Encuentra los mejores productos",
  description: "Compra los mejores productos de electrónica y más.",
  icons: {
    icon: "./favicon.ico",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
