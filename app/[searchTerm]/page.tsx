import ProductList from "@/components/ProductList";

type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredProducts);
  console.log(products);
  return <ProductList products={filteredProducts} search={true} />;
}
