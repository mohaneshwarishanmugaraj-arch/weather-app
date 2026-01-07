import { useEffect, useRef } from "react"

export default function RainCanvas({ active }) {
  const ref = useRef()

  useEffect(() => {
    if (!active) return
    const c = ref.current
    const ctx = c.getContext("2d")
    c.width = innerWidth
    c.height = innerHeight

    const drops = Array.from({ length: 120 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      l: Math.random() * 20 + 10
    }))

    const draw = () => {
      ctx.clearRect(0,0,c.width,c.height)
      ctx.strokeStyle = "rgba(180,200,255,.7)"
      drops.forEach(d => {
        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x, d.y + d.l)
        ctx.stroke()
        d.y += 6
        if (d.y > c.height) d.y = 0
      })
      requestAnimationFrame(draw)
    }
    draw()
  }, [active])

  if (!active) return null
  return <canvas ref={ref} className="fixed inset-0 -z-10" />
}
