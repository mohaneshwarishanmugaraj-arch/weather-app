export default function SunMoon({ isDay }) {
  return (
    <div className="fixed top-20 right-16 z-10 pointer-events-none">
      {isDay ? (
        <div className="sun-container">
          ☀️
          <span className="sun-rays" />
        </div>
      ) : (
        <div className="moon-glow">🌙</div>
      )}
    </div>
  )
}
