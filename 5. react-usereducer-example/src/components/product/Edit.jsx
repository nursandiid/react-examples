/* eslint-disable react/prop-types */
import Modal from '../ui/Modal'
import { updateProduct, useProductContext } from '../../context/product.context'

export default function Edit() {
  const { state, dispatch, modalEditRef, refreshProducts } = useProductContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateProduct(state.product?.id, state.product)

    dispatch({ type: 'CLOSE_MODAL', modal: modalEditRef.current })
    dispatch({ type: 'RESET_PRODUCT' })
    refreshProducts()
  }

  return (
    <Modal
      modalRef={modalEditRef}
      closeModal={() =>
        dispatch({
          type: 'CLOSE_MODAL',
          modal: modalEditRef.current
        })
      }
      title="Edit Product"
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
              dispatch({ type: 'CLOSE_MODAL', modal: modalEditRef.current })
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
