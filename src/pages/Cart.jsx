import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Cart() {
  const { items, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-24 text-center">
        <p>Cart abhi khaali hai.</p>
        <Link to="/shop" className="mt-4 inline-block underline">
          Shopping karo
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-brand">Your Cart</h1>

      <ul className="mt-6 divide-y">
        {items.map((i) => (
          <li key={i.key} className="flex gap-4 py-4">
            <img
              src={i.image}
              alt={i.name}
              className="h-24 w-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="font-medium">{i.name}</p>
              <p className="text-sm text-stone-500">
                Size: {i.size} · Qty: {i.qty}
              </p>
            </div>
            <p className="font-semibold">₹{i.price * i.qty}</p>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-right text-xl font-semibold">
        Subtotal: ₹{subtotal}
      </p>
    </section>
  );
}
