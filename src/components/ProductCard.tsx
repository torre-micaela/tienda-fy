"use client";
import { Product } from "@/types/product-type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ProductCardProps {
  product: Product;
  children?: ReactNode;
  imageSize?: "small" | "large";
}

export default function ProductCard({
  product,
  children,
  imageSize = "small",
}: ProductCardProps) {
  const router = useRouter();
  const imageHeight = imageSize === "small" ? "h-52" : "h-96";

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border">
      <div className={`relative w-full ${imageHeight}`}>
        <Image
          src={product.image || "/placeholder.jpg"}
          alt={product.name}
          fill
          priority
          className="object-cover w-full h-full"
          unoptimized
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
        <p className="text-sm text-gray-500">SKU: {product.sku}</p>
        <p className="text-sm text-gray-500">
          {product.category?.name} - {product.brand}
        </p>
        <p className="text-2xl font-bold text-blue-900 mt-3">
          ${product.price}
        </p>

        {!children && (
          <button
            onClick={() => router.push(`/products/${product.sku}`)}
            className="mt-5 w-full text-center bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition"
          >
            Ver más
          </button>
        )}

        {children}
      </div>
    </div>
  );
}
