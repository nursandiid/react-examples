import { useState, useEffect } from 'react'

export default function Countdown() {
  const [seconds, setSeconds] = useState(120)

  useEffect(() => {
    let intervalId
    if (seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prev) => prev - 1)
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [seconds])

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return (
    <div className="my-4">
      <h1 className="text-2xl font-semibold mb-">Countdown Timer</h1>
      <p>
        Time remaining: {String(minutes).padStart(2, '0')}:
        {String(remainingSeconds).padStart(2, '0')}
      </p>
    </div>
  )
}
