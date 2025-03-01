
"use client"
import { useRouter } from "next/navigation";

interface PaginatorProps {
  page: number;
  lastPage: boolean;
  search?: string;
  isDisabled: boolean;
}

export default function Paginator({
  page,
  lastPage,
  search,
  isDisabled,
}: PaginatorProps) {
  const router = useRouter();

  return (
    <div
      className={`flex justify-center gap-4 mt-6 ${
        isDisabled ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      <button
        onClick={() => router.push(`/?search=${search}&page=${page - 1}`)}
        className={`px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 ${
          page === 1 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        Anterior
      </button>
      <button
        onClick={() => router.push(`/?search=${search}&page=${page + 1}`)}
        className={`px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 ${
          lastPage ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        Siguiente
      </button>
    </div>
  );
}
