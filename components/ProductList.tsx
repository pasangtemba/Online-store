"use client";

import Product from "./Product";
import SearchBar from "./SearchBar";

type Props = {
  products: Product[];
  search: Boolean;
};

function ProductList({ products, search }: Props) {
  return (
    <main className="main-h-sereen  max-w-7xl mx-auto px-8 xl:px-0 mt-48">
      <SearchBar />
      <section className="flex flex-col space-y-12 pb-44 ">
        {search ? (
          <h1 className="text-5xl font-bold text-center">Search Result</h1>
        ) : (
          <h1 className="text-5xl font-bold text-center">Online Store</h1>
        )}

        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-clos-3 xl:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductList;
