export default function Navbar({ city, onSearch }) {
  const now = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit"
  })

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="text-xl font-semibold">{now}</div>

      <input
        placeholder="Search city"
        className="px-6 py-3 rounded-full bg-blue-500 text-white outline-none"
        onKeyDown={(e) =>
          e.key === "Enter" && onSearch(e.target.value)
        }
      />
    </div>
  )
}
