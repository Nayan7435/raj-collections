import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { useCart } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { product, loading, error: fetchError } = useProduct(id);

  const [size, setSize] = useState(null);
  const [error, setError] = useState(false);
  const [added, setAdded] = useState(false);

  if (loading) {
    return <p className="py-24 text-center text-stone-500">Loading...</p>;
  }

  if (fetchError) {
    return (
      <p className="py-24 text-center text-accent">
        Server se connect nahi ho paya. Thodi der baad try karo.
      </p>
    );
  }

  if (!product) {
    return (
      <div className="py-24 text-center">
        <p>Product nahi mila.</p>
        <Link to="/shop" className="mt-4 inline-block underline">
          Shop par wapas jao
        </Link>
      </div>
    );
  }

  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAdd = () => {
    if (!size) {
      setError(true);
      return;
    }
    setError(false);
    addToCart(product, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/shop" className="text-sm text-stone-600 hover:text-accent">
        ← Shop
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-3/4 w-full rounded-3xl object-cover"
        />

        <div>
          <p className="text-sm uppercase tracking-widest text-accent">
            {product.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-brand">{product.name}</h1>

          <p className="mt-4 text-2xl font-semibold">
            ₹{product.price}{" "}
            <span className="text-base font-normal text-stone-400 line-through">
              ₹{product.mrp}
            </span>{" "}
            <span className="text-base text-green-700">{off}% off</span>
          </p>

          <p className="mt-6 text-sm font-medium">Size chuno</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSize(s);
                  setError(false);
                }}
                className={`min-w-12 rounded-lg border px-3 py-2 text-sm ${
                  size === s
                    ? "border-brand bg-brand text-white"
                    : "bg-white hover:border-brand"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {size && (
            <p className="mt-3 text-sm text-stone-600">Selected size: {size}</p>
          )}
          {error && (
            <p className="mt-2 text-sm text-accent">Pehle size select karo.</p>
          )}

          <button
            onClick={handleAdd}
            className="mt-8 rounded-full bg-brand px-12 py-3 font-medium text-white hover:opacity-90"
          >
            Add to Cart
          </button>

          {added && (
            <p className="mt-3 text-sm text-green-700">Cart me add ho gaya ✓</p>
          )}
        </div>
      </div>
    </section>
  );
}
