import { STORE } from "./data/store"

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-sand">
      <h1 className="text-4xl font-bold text-brand">{STORE.name}</h1>
      <p className="mt-2 text-accent">{STORE.tagline}</p>
    </div>
  )
}