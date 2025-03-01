import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { getProductDetails } from "@/services/productService";
import { Specification } from "@/types/product-type";
import Link from "next/link";

export default async function ProductDetail({
  params,
}: {
  params: { sku: string };
}) {
  const skuParams= await params;
  const {sku} = skuParams
  const product = await getProductDetails(sku);

  if (!product) {
    return (
      <p className="text-red-500 text-center mt-10">Producto no encontrado.</p>
    );
  }

  return (
    <>
      <Header>
        <Link href="/" className="text-md">
          <span className="underline">Volver al listado</span>
        </Link>
      </Header>

      <main className="flex justify-center items-center p-6">
        <div className="max-w-2xl w-full">
          <ProductCard product={product} imageSize="large">
            <p className="text-gray-700 mt-6">{product.description}</p>

            <h3 className="text-lg font-bold mt-8">Especificaciones</h3>
            <ul className="mt-3 space-y-2">
              {product.specifications?.map(
                (spec: Specification, index: number) => (
                  <li
                    key={index}
                    className="bg-gray-100 px-4 py-2 rounded-md text-sm"
                  >
                    <span className="font-semibold">{spec.name}:</span>{" "}
                    {spec.value}
                  </li>
                )
              )}
            </ul>
          </ProductCard>
        </div>
      </main>
    </>
  );
}
