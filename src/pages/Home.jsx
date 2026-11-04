import { STORE } from "../data/store";

export default function Home() {
    return(
        <section className="mx-auto max-w-6xl px-4 py-16">
            <h1 className="text-4xl font-bold text-brand">Welcome to {STORE.name}</h1>
            <p className="mt-3 text-stone-600">{STORE.tagline}</p>
        </section>
    )
}