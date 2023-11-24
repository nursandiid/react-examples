import { useState, useEffect, useRef, useCallback } from 'react'
import Create from './Create'
import Edit from './Edit'

export default function Index() {
  const [products, setProducts] = useState([])
  const [productId, setProductId] = useState(null)
  const modalAddRef = useRef(null)
  const modalEditRef = useRef(null)

  // useCallback to memorize the fetchData function
  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:8000/products')
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const toggleModal = (modal, productId) => {
    if (typeof productId !== 'undefined') {
      setProductId(productId)
    }

    modal.classList.toggle('invisible')
  }

  const removeProduct = async (productId) => {
    if (confirm('Are you sure to delete this product?')) {
      await fetch(`http://localhost:8000/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      fetchData()
    }
  }

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:opacity-90"
          onClick={() => toggleModal(modalAddRef.current)}
        >
          Add
        </button>
      </div>
      <table className="border-collapse border border-slate-500 p-4 w-full">
        <thead>
          <tr>
            <th className="border border-slate-500 bg-slate-400 p-2 w-8">#</th>
            <th className="border border-slate-500 bg-slate-400 p-2">Name</th>
            <th className="border border-slate-500 bg-slate-400 p-2">Price</th>
            <th className="border border-slate-500 bg-slate-400 p-2">Stock</th>
            <th className="border border-slate-500 bg-slate-400 p-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={index}>
                <td className="border border-slate-500 p-2 align-top">
                  {index + 1}
                </td>
                <td className="border border-slate-500 p-2 align-top">
                  {product.name}
                </td>
                <td className="border border-slate-500 p-2 align-top">
                  {product.price}
                </td>
                <td className="border border-slate-500 p-2 align-top">
                  {product.stock}
                </td>
                <td className="border border-slate-500 p-2 align-top whitespace-nowrap w-36 space-x-2">
                  <button
                    className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:opacity-90"
                    onClick={() =>
                      toggleModal(modalEditRef.current, product.id)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:opacity-90"
                    onClick={() => removeProduct(product.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="border border-slate-500 p-2 text-center"
                colSpan={5}
              >
                Product is empty
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Create
        modalRef={modalAddRef}
        toggleModal={toggleModal}
        refreshData={fetchData}
      />

      <Edit
        modalRef={modalEditRef}
        toggleModal={toggleModal}
        refreshData={fetchData}
        productId={productId}
      />
    </>
  )
}
