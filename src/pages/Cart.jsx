import { Link } from "react-router-dom";
import { STORE } from "../data/store";
import { useCart } from "../context/cartContext";

export default function Cart() {
  const { items, subtotal, updateQty, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-24 text-center">
        <p>Cart is now Empty</p>
        <Link to="/shop" className="mt-4 inline-block underline">
          Shopping Something
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= STORE.freeShippingAbove ? 0 : STORE.shippingFee;
  const total = subtotal + shipping;

  return (
    <section className="mx-auto grid max-w-5xl gap-8 px-4 py-10 lg:grid-cols-[1fr_340px]">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-brand">Your Cart</h1>
          <button
            onClick={clearCart}
            className="text-sm text-stone-500 underline"
          >
            Remove all from the cart
          </button>
        </div>

        <ul className="mt-6 divide-y">
          {items.map((i) => (
            <li key={i.key} className="flex gap-4 py-4">
              <img
                src={i.image}
                alt={i.name}
                className="h-28 w-24 rounded-lg object-cover"
              />

              <div className="flex flex-1 flex-col">
                <p className="font-medium">{i.name}</p>
                <p className="text-sm text-stone-500">Size: {i.size}</p>
                <p className="mt-1 text-sm font-semibold">₹{i.price}</p>

                <div className="mt-auto flex items-center gap-4">
                  <div className="flex items-center rounded-full border">
                    <button
                      onClick={() => updateQty(i.key, i.qty - 1)}
                      className="px-3 py-1"
                      aria-label="Quantity kam karo"
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-sm">{i.qty}</span>
                    <button
                      onClick={() => updateQty(i.key, i.qty + 1)}
                      className="px-3 py-1"
                      aria-label="Quantity badhao"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(i.key)}
                    className="text-sm text-stone-500 underline"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <p className="font-semibold">₹{i.price * i.qty}</p>
            </li>
          ))}
        </ul>
      </div>

      <aside className="h-fit rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="text-xl font-bold text-brand">Order Summary</h2>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
          </div>
          <div className="flex justify-between border-t pt-3 text-base font-semibold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>

        <p className="mt-3 text-xs text-stone-600">
          {shipping > 0
            ? `add ₹${STORE.freeShippingAbove - subtotal} more to get free shipping`
            : "Congratulations you got the free shipping 🎉"}
        </p>

        <Link
          to="/checkout"
          className="mt-5 block rounded-full bg-brand py-3 text-center font-medium text-white hover:opacity-90"
        >
          Checkout
        </Link>
      </aside>
    </section>
  );
}
