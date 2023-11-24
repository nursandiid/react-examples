import Card from "../ui/Card";

/* eslint-disable react/prop-types */
export default function Table({ students }) {
  return (
    <Card title="Table Students">
      <table className="border-collapse border border-slate-500 p-4 w-full">
        <thead>
          <tr>
            <th className="border border-slate-500 bg-slate-400 p-2 w-8">#</th>
            <th className="border border-slate-500 bg-slate-400 p-2">Name</th>
            <th className="border border-slate-500 bg-slate-400 p-2">
              Address
            </th>
            <th className="border border-slate-500 bg-slate-400 p-2">
              Hobbies
            </th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={index}>
                <td className="border border-slate-500 p-2 align-top">
                  {index + 1}
                </td>
                <td className="border border-slate-500 p-2 align-top">
                  {student.name}
                </td>
                <td className="border border-slate-500 p-2 align-top">
                  {student.address}
                </td>
                <td className="border border-slate-500 p-2 align-top">
                  <ul className="list-disc ml-4">
                    {student.hobbies.length > 0
                      ? student.hobbies.map((hobby) => (
                          <li key={hobby}>{hobby}</li>
                        ))
                      : '-'}
                  </ul>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="border border-slate-500 p-2 text-center"
                colSpan={4}
              >
                Data is empty
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  )
}
