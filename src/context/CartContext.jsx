import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product, size) => {
    const key = `${product._id}-${size}`;

    setItems((prev) => {
      const found = prev.find((i) => i.key === key);

      if (found) {
        return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + 1 } : i));
      }

      return [
        ...prev,
        {
          key,
          id: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          size,
          qty: 1,
        },
      ];
    });
  };

  const updateQty = (key, qty) => {
      setItems((prev) =>
        qty <= 0
          ? prev.filter((i) => i.key !== key)
          : prev.map((i) => (i.key === key ? { ...i, qty } : i)),
      );
    };

    const removeItem = (key) => {
      setItems((prev) => prev.filter((i) => i.key !== key));
    };

    const clearCart = () => setItems([]);

  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, updateQty, removeItem, clearCart, count, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
