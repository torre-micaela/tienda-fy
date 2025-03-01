import { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <p className="text-2xl font-bold">TiendaFy</p>
      <div>{children}</div>
    </header>
  );
}
