/* eslint-disable react/prop-types */
import Modal from '../ui/Modal'
import { useProductContext, createProduct } from '../../context/product.context'

export default function Create() {
  const { state, dispatch, modalCreateRef, refreshProducts } =
    useProductContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createProduct(state.product)

    dispatch({ type: 'CLOSE_MODAL', modal: modalCreateRef.current })
    dispatch({ type: 'RESET_PRODUCT' })
    refreshProducts()
  }

  return (
    <Modal
      modalRef={modalCreateRef}
      closeModal={() =>
        dispatch({
          type: 'CLOSE_MODAL',
          modal: modalCreateRef.current
        })
      }
      title="Add Product"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="inline-block mb-1">
            Name :
          </label>
          <input
            type="text"
            id="name"
            className="input-control"
            value={state.product?.name}
            onChange={(e) =>
              dispatch({
                type: 'SET_PRODUCT',
                payload: {
                  name: e.target.value
                }
              })
            }
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="inline-block mb-1">
            Price :
          </label>
          <input
            type="number"
            id="price"
            className="input-control"
            value={state.product?.price}
            onChange={(e) =>
              dispatch({
                type: 'SET_PRODUCT',
                payload: {
                  price: e.target.value
                }
              })
            }
          />
        </div>

        <div className="mb-4">
          <label htmlFor="stock" className="inline-block mb-1">
            Stock :
          </label>
          <input
            type="number"
            id="stock"
            className="input-control"
            value={state.product?.stock}
            onChange={(e) =>
              dispatch({
                type: 'SET_PRODUCT',
                payload: {
                  stock: e.target.value
                }
              })
            }
          />
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              dispatch({
                type: 'CLOSE_MODAL',
                modal: modalCreateRef.current
              })
            }
          >
            Close
          </button>
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </Modal>
  )
}
