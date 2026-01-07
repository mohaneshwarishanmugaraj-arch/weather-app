export default function CartoonSky({ type }) {
  if (type === "Rain") return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <span className="absolute top-20 text-7xl cloud">☁️</span>
      <span className="absolute top-44 text-8xl cloud delay-2000">🌥️</span>
      <span className="absolute top-72 text-6xl cloud delay-4000">☁️</span>
    </div>
  )
}
