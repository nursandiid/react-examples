import { useEffect } from 'react'
import Create from './Create'
import Edit from './Edit'
import { useProductContext } from '../../context/product.context'

export default function Index() {
  const {
    products,
    getProducts,
    setProduct,
    modalCreateRef,
    modalEditRef,
    openModal
  } = useProductContext()

  useEffect(() => {
    getProducts()
  }, [getProducts])

  const createProduct = async () => {
    openModal(modalCreateRef.current)
  }

  const editProduct = async (productId) => {
    const res = await fetch(`http://localhost:8000/products/${productId}`)
    const data = await res.json()

    if (Object.keys(data).length > 0) {
      setProduct(data)
    }

    openModal(modalEditRef.current)
  }

  const removeProduct = async (productId) => {
    if (confirm('Are you sure to delete this product?')) {
      await fetch(`http://localhost:8000/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      getProducts()
    }
  }

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:opacity-90"
          onClick={createProduct}
        >
          Add
        </button>
      </div>
      <table className="border-collapse border border-slate-500 p-4 w-full">
        <thead>
          <tr>
            <th className="border border-slate-500 bg-slate-400 dark:bg-slate-600 p-2 w-8">
              #
            </th>
            <th className="border border-slate-500 bg-slate-400 dark:bg-slate-600 p-2">
              Name
            </th>
            <th className="border border-slate-500 bg-slate-400 dark:bg-slate-600 p-2">
              Price
            </th>
            <th className="border border-slate-500 bg-slate-400 dark:bg-slate-600 p-2">
              Stock
            </th>
            <th className="border border-slate-500 bg-slate-400 dark:bg-slate-600 p-2">
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
                    onClick={() => editProduct(product.id)}
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

      <Create />
      <Edit />
    </>
  )
}
