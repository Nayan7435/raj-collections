import { useState } from "react";
import { CATEGORIES } from "../data/products";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const { products, loading, error } = useProducts();
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const list = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (sort === "low") list.sort((a, b) => a.price - b.price);
  if (sort === "high") list.sort((a, b) => b.price - a.price);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-brand">Shop</h1>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full border px-4 py-1.5 text-sm ${
              category === c
                ? "border-brand bg-brand text-white"
                : "bg-white hover:border-brand"
            }`}
          >
            {c}
          </button>
        ))}

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search kapde..."
          className="ml-auto rounded-full border bg-white px-4 py-1.5 text-sm outline-none focus:border-brand"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-full border bg-white px-3 py-1.5 text-sm"
        >
          <option value="default">Sort: Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {loading && (
        <p className="mt-10 text-center text-stone-500">Loading...</p>
      )}
      {error && <p className="mt-10 text-center text-accent">{error}</p>}

      {!loading && !error && (
        <>
          <p className="mt-4 text-sm text-stone-500">{list.length} products</p>

          {list.length === 0 ? (
            <p className="mt-16 text-center text-stone-500">
              Koi product nahi mila.
            </p>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
              {list.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
