export const get7Days = (list) => {
  const result = []
  const used = new Set()

  list.forEach(item => {
    const day = new Date(item.dt * 1000).getDay()
    if (!used.has(day) && result.length < 7) {
      used.add(day)
      result.push(item)
    }
  })
  return result
}

export const dayName = (dt) =>
  new Date(dt * 1000).toLocaleDateString("en-US", { weekday: "short" })
