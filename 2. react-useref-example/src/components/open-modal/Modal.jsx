import { useRef } from 'react'
import Card from '../ui/Card'

export default function Modal() {
  const modalRef = useRef(null)

  function toggle(modal) {
    modal.classList.toggle('invisible')
  }

  return (
    <>
      <div className="text-center">
        <button
          className="btn btn-dark"
          onClick={() => toggle(modalRef.current)}
        >
          Open Modal
        </button>
      </div>

      <div
        className="overlay bg-[#47556960] fixed top-0 right-0 bottom-0 left-0 transition-all ease-in-out invisible"
        ref={modalRef}
      >
        <Card
          title="Congratulations!"
          className="w-[calc(90vw)] sm:max-w-md bg-slate-800 text-slate-200 border-0 shadow-lg absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2"
        >
          <p className="mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste sit
            vel temporibus!
          </p>

          <div className="flex justify-end space-x-2">
            <button
              className="btn border border-slate-600 bg-slate-600 text-white hover:opacity-90"
              onClick={() => toggle(modalRef.current)}
            >
              Close
            </button>
            <button className="btn btn-primary">Yes</button>
          </div>
        </Card>
      </div>
    </>
  )
}
