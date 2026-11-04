import { Link,NavLink } from "react-router-dom";
import { STORE } from "../data/store";

const linkClass = ({ isActive }) =>
    isActive ? 'font-semibold text-accent' : 'hover:text-accent'

export default function Navbar() {
    return(
        <header className="sticky top-0 z-30 border-b bg-sand/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <Link to="/" className="text-2xl font-bold text-brand">
                    {STORE.name}
                </Link>
                <nav className="flex items-center gap-10 text-sm">
                    <NavLink to="/" end className={linkClass}>Home</NavLink>
                    <NavLink to="/shop" className={linkClass}>Shop</NavLink>
                    <NavLink to="/about" className={linkClass}>About</NavLink>
                </nav>
            </div>
        </header>
    )
}