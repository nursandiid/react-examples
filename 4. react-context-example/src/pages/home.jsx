import { useAppContext } from '../context/app.context'

export default function Home() {
  const [data] = useAppContext()

  return (
    <div className="my-4">
      <h1 className="text-2xl font-semibold mb-">useContext Example</h1>
      {data ? <p>Data: {data}</p> : <p>Loading data in 3s ...</p>}
    </div>
  )
}
