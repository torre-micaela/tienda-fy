import { searchWithRegex } from "@/helpers/fuctions";
import callApi from "@/lib/axios";
import { Product } from "@/types/product-type";

export async function getProducts(
  search = "",
  page = 1,
  size = 5
): Promise<{ products: Product[]; isLastPage: boolean }> {
  try {
    const products: Product[] = await callApi({
      url: "/products",
      params: { search: search, page: page, limit: size },
    });

    const filteredProducts = products?.filter(
      ({ name, sku }: Product) =>
        searchWithRegex(name, search) || searchWithRegex(sku, search)
    );
    const isLastPage = filteredProducts.length < size;

    return { products: filteredProducts || [], isLastPage };
  } catch (error) {
    console.error("Error obteniendo productos:", error);

    return { products: [], isLastPage: true };
  }
}

export async function getProductDetails(sku: string) {
  try {
    const product = await callApi({
      url: "/products",
      params: { sku },
    });

    return product.length ? product[0] : null;
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    return null;
  }
}
