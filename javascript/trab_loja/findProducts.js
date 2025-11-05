export async function findProducts() {
  try {
    const products = await fetch("https://fakestoreapi.com/products");
    const productsJson = await products.json();

    const filteredProducts = productsJson.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
    }));

    return filteredProducts;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error.message);
    return [];
  }
}