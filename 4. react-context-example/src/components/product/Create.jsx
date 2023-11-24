/* eslint-disable react/prop-types */
import Modal from '../ui/Modal'
import { useProductContext } from '../../context/product.context'

export default function Create() {
  const {
    product,
    setProduct,
    resetProduct,
    getProducts,
    modalCreateRef,
    closeModal
  } = useProductContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:8000/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    closeModal(modalCreateRef.current)
    resetProduct()
    getProducts()
  }

  return (
    <Modal modalRef={modalCreateRef} title="Add Product">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="inline-block mb-1">
            Name :
          </label>
          <input
            type="text"
            id="name"
            className="block border rounded-md px-2 py-1 w-full dark:bg-slate-700 border-slate-700"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            autoFocus={true}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="inline-block mb-1">
            Price :
          </label>
          <input
            type="number"
            id="price"
            className="block border rounded-md px-2 py-1 w-full dark:bg-slate-700 border-slate-700"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            autoFocus={true}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="stock" className="inline-block mb-1">
            Stock :
          </label>
          <input
            type="number"
            id="stock"
            className="block border rounded-md px-2 py-1 w-full dark:bg-slate-700 border-slate-700"
            value={product.stock}
            onChange={(e) => setProduct({ ...product, stock: e.target.value })}
            autoFocus={true}
          />
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="btn border border-slate-200 bg-slate-200 text-slate-800 hover:opacity-90 dark:bg-slate-600 dark:border-slate-600 dark:text-slate-200"
            onClick={() => closeModal(modalCreateRef.current)}
          >
            Close
          </button>
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </Modal>
  )
}
