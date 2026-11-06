import { useState } from "react"
import { CATEGORIES, PRODUCTS } from "../data/products"
import ProductCard from "../components/ProductCard"

export default function Shop() {
    const [ category, setCategory ] = useState("All")

    const filtered =
        category === 'All'
            ? PRODUCTS
            : PRODUCTS.filter((p) => p.category === category)

    return(
        <section className="mx-auto max-w-6xl px-4 py-10">
            <h1 className="text-3xl font-bold text-brand">Shop</h1>

            <div className="mt-6 flex flex-wrap gap-3">
                {CATEGORIES.map((c) => (
                    <button
                        key={c}
                        onClick={() => setCategory(c)}
                        className={`rounded-full border px-4 py-1.5 text-sm ${
                            category === c
                                ? 'border-brand bg-brand text-white'
                                : 'bg-white hover:border-brand'
                        }`}
                    >
                        {c}
                    </button>
                ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
                {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    )
}