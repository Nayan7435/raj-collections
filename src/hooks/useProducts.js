import { useEffect, useState } from "react";
import { getProducts } from "../api";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() =>
        setError("Server Disconnected! Try after later."),
      )
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}
