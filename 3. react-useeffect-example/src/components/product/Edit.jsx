/* eslint-disable react/prop-types */
import { useState } from 'react'
import Modal from '../ui/Modal'
import { useEffect } from 'react'

export default function Edit({
  modalRef,
  toggleModal,
  refreshData,
  productId
}) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    stock: ''
  })

  useEffect(() => {
    async function fetchData() {
      if (!productId) {
        return
      }

      const res = await fetch(`http://localhost:8000/products/${productId}`)
      const data = await res.json()

      if (Object.keys(data).length > 0) {
        setProduct(data)
      }
    }

    fetchData()
  }, [productId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch(`http://localhost:8000/products/${productId}`, {
      method: 'PUT',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    setProduct({ name: '', price: '', stock: '' })
    toggleModal(modalRef.current)
    refreshData()
  }

  return (
    <Modal modalRef={modalRef} toggleModal={toggleModal} title="Edit Product">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="inline-block mb-1">
            Name :
          </label>
          <input
            type="text"
            id="name"
            className="block border rounded-md px-2 py-1 w-full"
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
            className="block border rounded-md px-2 py-1 w-full"
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
            className="block border rounded-md px-2 py-1 w-full"
            value={product.stock}
            onChange={(e) => setProduct({ ...product, stock: e.target.value })}
            autoFocus={true}
          />
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="btn border border-slate-200 bg-slate-200 text-slate-800 hover:opacity-90"
            onClick={() => toggleModal(modalRef.current)}
          >
            Close
          </button>
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </Modal>
  )
}
