export default function WeatherPopup({ day, onClose, unit }) {
  if (!day) return null

  navigator.vibrate?.(80)
  new Audio("/pop.mp3").play()

  const temp =
    unit === "C"
      ? Math.round(day.main.temp)
      : Math.round(day.main.temp * 1.8 + 32)

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="glass popup p-6 text-center">
        <h3 className="text-xl">{new Date(day.dt*1000).toDateString()}</h3>
        <div className="text-6xl my-4">🌡️</div>
        <div className="text-4xl">{temp}°{unit}</div>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 rounded-full bg-blue-500 text-white"
        >
          Close
        </button>
      </div>
    </div>
  )
}
