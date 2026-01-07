export default function DayNightBackground({ isDay }) {
  return (
    <div
      className={`fixed inset-0 -z-20 transition-all duration-1000
      ${isDay ? "bg-pastel-day" : "bg-pastel-night"}`}
    />
  )
}
