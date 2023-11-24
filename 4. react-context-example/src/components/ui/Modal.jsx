import { useProductContext } from '../../context/product.context'

/* eslint-disable react/prop-types */
export default function Modal({ modalRef, title, children }) {
  const { closeModal } = useProductContext()

  const handleClick = (e) => {
    if (e.target === modalRef.current) {
      closeModal(modalRef.current)
    }
  }

  return (
    <div className="modal invisible" ref={modalRef} onClick={handleClick}>
      <div className="modal-body card w-[calc(90vw)] sm:max-w-lg bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-200">
        <h5 className="font-semibold text-lg mb-2">{title}</h5>
        {children}
      </div>
    </div>
  )
}
