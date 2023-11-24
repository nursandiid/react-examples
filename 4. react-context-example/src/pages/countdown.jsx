import { useAppContext } from '../context/app.context'

export default function Countdown() {
  const [, seconds] = useAppContext()

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
