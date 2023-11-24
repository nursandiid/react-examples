import { useEffect } from 'react'
import Create from './Create'
import Edit from './Edit'
import {
  useProductContext,
  removeProduct,
  getProduct
} from '../../context/product.context'

export default function Index() {
  const { state, refreshProducts, dispatch, modalCreateRef, modalEditRef } =
    useProductContext()

  useEffect(() => {
    refreshProducts()
  }, [])

  const handleCreate = () => {
    dispatch({ type: 'OPEN_MODAL', modal: modalCreateRef.current })
  }

  const handleEdit = async (productId) => {
    const product = await getProduct(productId)

    dispatch({ type: 'SET_PRODUCT', payload: product })
    dispatch({ type: 'OPEN_MODAL', modal: modalEditRef.current })
  }

  const handleDelete = async (productId) => {
    if (confirm('Are you sure to delete this product?')) {
      await removeProduct(productId)
      refreshProducts()
    }
  }

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button className="btn btn-primary" onClick={handleCreate}>
          Add
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th className="w-8">#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.products.length > 0 ? (
            state.products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td className="whitespace-nowrap w-36 space-x-2">
                  <button
                    className="btn btn-yellow"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-red"
                    onClick={() => handleDelete(product.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-center" colSpan={5}>
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
