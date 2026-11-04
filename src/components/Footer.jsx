import { STORE } from "../data/store";

export default function Footer() {
    return (
        <footer className="bg-brand py-6 text-center text-sm text-white">
            <p>{STORE.name} · {STORE.tagline}</p>
            <p className="mt-1 text-white/70">
                © {new Date().getFullYear()} All rights reserved.
            </p>
            <p>{STORE.phone}</p>
        </footer>
    )
}