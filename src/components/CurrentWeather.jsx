export default function CurrentWeather({ data, unit }) {
  const temp =
    unit === "C"
      ? Math.round(data.main.temp)
      : Math.round(data.main.temp * 1.8 + 32)

  return (
    <div className="glass p-8 text-center">
      <h2 className="text-3xl font-semibold">{data.name}</h2>
      <p className="opacity-70">{data.weather[0].description}</p>
      <div className="text-7xl my-4">🌤️</div>
      <div className="text-5xl font-bold">{temp}°{unit}</div>
    </div>
  )
}
