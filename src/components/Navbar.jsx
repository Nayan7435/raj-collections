import { Link, NavLink } from "react-router-dom";
import { STORE } from "../data/store";
import { useCart } from "../context/CartContext";

const linkClass = ({ isActive }) =>
  isActive ? "font-semibold text-accent" : "hover:text-accent";

export default function Navbar() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-30 border-b bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-brand">
          {STORE.name}
        </Link>
        <nav className="flex items-center gap-10 text-sm">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/shop" className={linkClass}>
            Shop
          </NavLink>
          <Link
            to="/cart"
            className="relative rounded-full bg-brand px-4 py-2 text-white"
          >
            Cart
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs">
                {count}
              </span>
            )}
          </Link>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
