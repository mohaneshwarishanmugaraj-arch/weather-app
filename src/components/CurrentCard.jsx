export default function CurrentCard({ temp, desc }) {
  return (
    <div className="glass p-8 text-center mb-8">
      <div className="text-[120px] float">🌤️</div>
      <div className="text-6xl font-bold">{temp}°C</div>
      <p className="text-xl opacity-70 mt-2">{desc}</p>
    </div>
  )
}
