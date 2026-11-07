import { useState } from "react";
import { CATEGORIES, PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState('');
  const [sort, SetSort] = useState('default')

  let list = PRODUCTS.filter(
    (p) =>
        (category === 'All' || p.category === category) &&
        p.name.toLowerCase().includes(search.toLowerCase())
  )

  if (sort === 'low') list.sort((a, b) => a.price - b.price)
  if (sort === 'high') list.sort((a, b) => b.price - a.price)

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-brand">Shop</h1>

      <div className="mt-6 flex flex-wrap gap-3">
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
            placeholder="Search Clothes..."
            className="ml-auto rounded-full border bg-white px-4 py-1.5 text-sm outline-none focus:border-brand"
        />

        <select
            value={sort}
            onChange={(e) => SetSort(e.target.value)}
            className="rounded-full border bg-white px-3 py-1.5 text-sm"
        >
            <option value="default">Sort: Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
        </select>
      </div>

      {list.length === 0 ? (
        <p className="mt-16 text-center text-stone-500">
          No Products Found.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
