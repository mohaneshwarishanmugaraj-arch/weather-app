const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

export default function WeekForecast({ onSelect }) {
  return (
    <div className="flex justify-between gap-3">
      {days.map((day,i) => (
        <button
          key={i}
          onClick={() => onSelect(day)}
          className="glass p-4 flex-1 text-center hover:scale-105 transition"
        >
          <p>{day}</p>
          <div className="text-4xl my-2">🌧️</div>
          <p>23°</p>
        </button>
      ))}
    </div>
  )
}
