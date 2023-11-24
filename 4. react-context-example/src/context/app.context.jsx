/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [seconds, setSeconds] = useState(120)

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
  })

  useEffect(() => {
    let intervalId
    if (seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prev) => prev - 1)
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [seconds])

  const value = [data, seconds]

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
