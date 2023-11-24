import { useState, useEffect } from 'react'

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000))

        setData('Fetched data from the server')
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, []) // The empty dependency array means this effect runs once when the component mounts

  return (
    <div className="my-4">
      <h1 className="text-2xl font-semibold mb-">useEffect Example</h1>
      {data ? <p>Data: {data}</p> : <p>Loading data in 3s ...</p>}
    </div>
  )
}
