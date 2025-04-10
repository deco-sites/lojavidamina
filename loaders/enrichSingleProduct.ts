// utils/enrichSingleProduct.ts
export async function enrichSingleProduct(product: any) {
  try {
    const res = await fetch(
      `https://vidamina.vtexcommercestable.com.br/api/catalog_system/pub/products/search/?fq=productId:${product.productID}`,
    );

    if (!res.ok) throw new Error("Erro ao buscar produto");

    const [data] = await res.json();

    return { ...product, ...data };
  } catch (err) {
    console.error(`Erro ao enriquecer produto ${product.productID}:`, err);
    return product;
  }
}
