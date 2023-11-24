/* eslint-disable react/prop-types */
export default function Modal({ modalRef, toggleModal, title, children }) {
  function handleClick(e) {
    if (e.target === modalRef.current) {
      toggleModal(modalRef.current)
    }
  }

  return (
    <div className="modal invisible" ref={modalRef} onClick={handleClick}>
      <div className="modal-body card w-[calc(90vw)] sm:max-w-lg bg-white text-slate-800">
        <h5 className="font-semibold text-lg mb-2">{title}</h5>
        {children}
      </div>
    </div>
  )
}
