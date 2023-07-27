import Product from "../components/Product";
import ProductList from "@/components/ProductList";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return <ProductList products={products} search={false} />;
}
