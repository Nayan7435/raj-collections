import { Link } from 'react-router-dom'
import { STORE } from '../data/store'
import { PRODUCTS } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const trending = PRODUCTS.slice(0, 4)

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold text-brand">Welcome to {STORE.name}</h1>
        <p className="mt-3 text-stone-600">{STORE.tagline}</p>
        <Link
          to="/shop"
          className="mt-6 inline-block rounded-full bg-brand px-8 py-3 font-medium text-white hover:opacity-90"
        >
          Shop Now
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-brand">Trending</h2>
          <Link to="/shop" className="text-sm underline">
            Sab dekho
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {trending.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  )
}