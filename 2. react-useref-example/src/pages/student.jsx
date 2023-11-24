import { useState } from 'react'
import Form from '../components/student/Form'
import Table from '../components/student/Table'

export default function Student() {
  const [students, setStudents] = useState([])

  return (
    <div className="mt-8 lg:max-w-3xl m-auto">
      <Form students={students} setStudents={setStudents} />
      <Table students={students} />
    </div>
  )
}
