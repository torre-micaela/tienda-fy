import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">Página no encontrada</p>
      <p className="text-gray-500 mt-2">
        La página que buscas no existe o ha sido movida.
      </p>
      <Link href="/">
        <p className="underline">Volver al inicio</p>
      </Link>
    </main>
  );
}
