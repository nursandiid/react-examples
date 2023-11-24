import { useRef, useState } from 'react'
import Card from '../ui/Card'

/* eslint-disable react/prop-types */
export default function Form({ students, setStudents }) {
  const nameRef = useRef(null)
  const [student, setStudent] = useState({
    name: '',
    address: '',
    hobbies: []
  })
  const hobbies = ['Reading', 'Writing', 'Sleeping']

  function handleSubmit(e) {
    e.preventDefault()

    if (student.name.length === 0) {
      return alert('Please complete your data')
    }

    if (students.filter((st) => st.name === student.name).length > 0) {
      return alert('Name already exists')
    }

    setStudents([...students, student])
    setStudent({
      name: '',
      address: '',
      hobbies: []
    })

    nameRef.current.focus()
  }

  const handleSetHobbies = (e) => {
    let hobbies = student.hobbies
    const hobby = e.target.value
    const isChecked = e.target.checked

    if (!hobbies.includes(hobby)) {
      hobbies.push(hobby)
    } else if (hobbies.includes(hobby) && !isChecked) {
      hobbies = hobbies.filter((h) => h !== hobby)
    }

    setStudent({ ...student, hobbies })
  }

  return (
    <Card title="Form Input Students" className="mb-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            className="block border rounded-md px-2 py-1"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
            autoFocus={true}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address">Address :</label>
          <textarea
            id="address"
            className="block border rounded-md px-2 py-1"
            value={student.address}
            onChange={(e) =>
              setStudent({ ...student, address: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address">Hobbies :</label>
          {hobbies.map((hobby, index) => (
            <div key={index} className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id={index}
                  type="checkbox"
                  multiple={true}
                  className="w-4 h-4"
                  value={hobby}
                  checked={student.hobbies?.includes(hobby)}
                  onChange={(e) => handleSetHobbies(e)}
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor={index} className="font-medium text-gray-900">
                  {hobby}
                </label>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-blue-500 text-white hover:opacity-90 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-lg px-3 py-1">
          Save
        </button>
      </form>
    </Card>
  )
}
