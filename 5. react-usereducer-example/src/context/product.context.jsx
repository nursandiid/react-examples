/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useCallback,
  createRef,
  useRef,
  useReducer
} from 'react'

const ProductContext = createContext()

export const useProductContext = () => useContext(ProductContext)

const initialState = {
  products: [],
  product: {
    name: '',
    price: '',
    stock: ''
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL_PRODUCTS':
      return { ...state, products: action.payload }
    case 'SET_PRODUCT':
      return { ...state, product: { ...state.product, ...action.payload } }
    case 'RESET_PRODUCT':
      return {
        ...state,
        product: {
          name: '',
          price: '',
          stock: ''
        }
      }
    case 'OPEN_MODAL':
      action.modal.classList.remove('invisible')
      return { ...state }
    case 'CLOSE_MODAL':
      action.modal.classList.add('invisible')
      return {
        ...state,
        product: {
          name: '',
          price: '',
          stock: ''
        }
      }
    default:
      throw new Error('Action was not found')
  }
}

export const getProducts = async () => {
  try {
    const res = await fetch('http://localhost:8000/products')
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export const createProduct = async (product) => {
  try {
    const res = await fetch('http://localhost:8000/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export const getProduct = async (productId) => {
  try {
    const res = await fetch(`http://localhost:8000/products/${productId}`)
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export const updateProduct = async (productId, product) => {
  try {
    const res = await fetch(`http://localhost:8000/products/${productId}`, {
      method: 'PUT',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export const removeProduct = async (productId) => {
  try {
    const res = await fetch(`http://localhost:8000/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const ref = useRef({})
  const [modalCreateRef, modalEditRef] = ['create', 'edit'].map(
    (m) => ref.current[m] ?? createRef()
  )

  const refreshProducts = useCallback(async () => {
    const data = await getProducts()
    dispatch({ type: 'INITIAL_PRODUCTS', payload: data })
  })

  const value = {
    state,
    dispatch,
    refreshProducts,
    modalCreateRef,
    modalEditRef
  }

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}
