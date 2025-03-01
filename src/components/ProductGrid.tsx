"use client"
import { Product } from "@/types/product-type";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="mt-5 p-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <ProductCard key={`${product.sku}-${product.name}`} product={product} />
      ))}
    </div>
  );
}
