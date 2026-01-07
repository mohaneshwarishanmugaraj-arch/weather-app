export default function DayPopup({ day, close }) {
  if (!day) return null

  navigator.vibrate?.(100)

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="glass p-6 text-center">
        <h2 className="text-xl mb-4">{day}</h2>
        <div className="text-[80px]">🌡️</div>
        <p className="text-4xl mt-3">24°C</p>
        <button
          onClick={close}
          className="mt-4 px-6 py-2 bg-blue-500 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  )
}
