import ProductGrid from "@/components/ProductGrid";
import Header from "@/components/Header";
import { getProducts } from "@/services/productService";
import InputSearch from "@/components/InputSearch";
import Paginator from "@/components/Paginator";

export default async function Home({
  searchParams,
}: {
  searchParams: { search?: string; page?: string };
}) {
  const search = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;
  const size = 5;
  const { products, isLastPage } = await getProducts(search, page, size);

  return (
    <main className="p-0">
      <Header>
        <InputSearch key={search || "initial"} search={search} />
      </Header>

      {products?.length === 0 ? (
        <p className="text-gray-500 text-center mt-4">
          No se encontraron productos.
        </p>
      ) : (
        <ProductGrid products={products} />
      )}

      <Paginator
        isDisabled={products?.length === 0}
        lastPage={isLastPage}
        search={search}
        page={page}
      />
    </main>
  );
}
