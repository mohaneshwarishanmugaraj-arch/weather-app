export default function Forecast({ days, onSelect, unit }) {
  const names = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  return (
    <div className="flex justify-between gap-2 mt-6">
      {days.slice(0,7).map((d, i) => (
        <button
          key={i}
          onClick={() => onSelect(d)}
          className="px-5 py-3 rounded-full bg-blue-500 text-white text-sm hover:scale-105 transition"
        >
          {names[new Date(d.dt * 1000).getDay()]}
        </button>
      ))}
    </div>
  )
}
