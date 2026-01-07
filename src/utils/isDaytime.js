export const isDaytime = (weather) => {
  if (!weather?.sys) return true

  const now = Math.floor(Date.now() / 1000)
  return now >= weather.sys.sunrise && now <= weather.sys.sunset
}
