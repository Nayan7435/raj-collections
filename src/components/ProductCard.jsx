import { Link } from "react-router-dom"

export default function ProductCard({ product }) {
    const off = Math.round(((product.mrp - product.price) / product.mrp) * 100)

    return(
        <Link to={`/product/${product._id}`} className="group block">
            <div className="overflow-hidden rounded-2xl bg-stone-200">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="aspect-3/4 w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>
            <h3 className="mt-3 text-sm font-medium">{product.name}</h3>
            <p className="mt-1 text-sm">
                <span className="font-semibold">₹{product.price}</span>
                <span className="text-stone-400 line-through">₹{product.mrp}</span>
                <span className="text-green-700">{off}% off</span>
            </p>
        </Link>
    )
}