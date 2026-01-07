import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import CartoonSky from "./components/CartoonSky"
import AnimatedBackground from "./components/AnimatedBackground"
import RainCanvas from "./components/RainCanvas"
import CurrentWeather from "./components/CurrentWeather"
import Forecast from "./components/Forecast"
import WeatherPopup from "./components/WeatherPopup"
import { get7Days } from "./utils"

const API = "https://api.openweathermap.org/data/2.5"
const KEY = "2a361acc7bbcd3870b9b65aa42d59a24"

export default function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [days, setDays] = useState([])
  const [popup, setPopup] = useState(null)
  const [unit, setUnit] = useState("C")
  const [loading, setLoading] = useState(true)

  // 📍 Load by location first
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        fetchByCoords(pos.coords.latitude, pos.coords.longitude)
      },
      () => {
        fetchByCity("Tiruchengode")
      }
    )
  }, [])

  // 🌍 Fetch by city
  const fetchByCity = async (cityName) => {
    setLoading(true)
    const w = await fetch(
      `${API}/weather?q=${cityName}&units=metric&appid=${KEY}`
    ).then(r => r.json())

    const f = await fetch(
      `${API}/forecast?q=${cityName}&units=metric&appid=${KEY}`
    ).then(r => r.json())

    setWeather(w)
    setDays(get7Days(f.list))
    setCity(w.name)
    setLoading(false)
  }

  // 📡 Fetch by coords
  const fetchByCoords = async (lat, lon) => {
    setLoading(true)
    const w = await fetch(
      `${API}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${KEY}`
    ).then(r => r.json())

    const f = await fetch(
      `${API}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${KEY}`
    ).then(r => r.json())

    setWeather(w)
    setDays(get7Days(f.list))
    setCity(w.name)
    setLoading(false)
  }

  if (loading || !weather) return null

  const weatherType = weather.weather[0].main
  const date = new Date().toDateString()

  return (
    <div className="min-h-screen p-6 bg-animate relative overflow-hidden">

      {/* 🌌 Background layers */}
      <AnimatedBackground weather={weatherType} />
      <CartoonSky type={weatherType} />
      <RainCanvas active={weatherType === "Rain"} />

      {/* 🧭 Navbar */}
      <Navbar
        city={city}
        date={date}
        onSearch={fetchByCity}
      />

      {/* 🌡 Unit toggle */}
      <button
        onClick={() => setUnit(unit === "C" ? "F" : "C")}
        className="absolute top-4 right-4 glass px-4 py-1 text-lg"
      >
        °{unit}
      </button>

      {/* ☀ Current weather */}
      <CurrentWeather data={weather} unit={unit} />

      {/* 📆 7-day forecast */}
      <Forecast
        days={days}
        unit={unit}
        onSelect={setPopup}
      />

      {/* 📲 Popup */}
      <WeatherPopup
        day={popup}
        unit={unit}
        onClose={() => setPopup(null)}
      />
    </div>
  )
}
