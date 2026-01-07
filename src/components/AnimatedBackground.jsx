export default function AnimatedBackground({ weather }) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="absolute text-[90px] opacity-20 float"
          style={{
            left: `${i * 15}%`,
            top: `${i * 10}%`,
            animationDelay: `${i}s`
          }}
        >
          {weather === "Rain" ? "🌧️" : "☁️"}
        </span>
      ))}
    </div>
  )
}
