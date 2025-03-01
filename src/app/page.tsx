import ProductGrid from "@/components/ProductGrid";
import Header from "@/components/Header";
import { getProducts } from "@/services/productService";
import InputSearch from "@/components/InputSearch";
import Paginator from "@/components/Paginator";

type SearchParams = Promise<{ search?: string; page?: string }>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { search = "", page = "1" } = await searchParams; 
  const pageNumber = Number(page) || 1;
  const size = 5;

  const { products, isLastPage } = await getProducts(search, pageNumber, size);

  return (
    <main className="p-0">
      <Header>
        <InputSearch key={search || "initial"} search={search} />
      </Header>

      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <p className="text-gray-500 text-center mt-4">
          No se encontraron productos.
        </p>
      )}

      <Paginator
        isDisabled={products.length === 0}
        lastPage={isLastPage}
        search={search}
        page={pageNumber}
      />
    </main>
  );
}
