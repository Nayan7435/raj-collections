const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function getProducts() {
  const res = await fetch(`${API_URL}/api/products`);
  if (!res.ok) throw new Error("Products is not loaded");
  return res.json();
}

export async function getProduct(id) {
  const res = await fetch(`${API_URL}/api/products/${id}`);
  if (res.status === 404 || res.status === 400) return null;
  if (!res.ok) throw new Error("Product is not loaded");
  return res.json();
}
