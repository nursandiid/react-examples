/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useState,
  useCallback,
  createRef,
  useRef
} from 'react'

const ProductContext = createContext()

export const useProductContext = () => useContext(ProductContext)

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({
    name: '',
    price: '',
    stock: ''
  })
  const ref = useRef({})
  const [modalCreateRef, modalEditRef] = ['create', 'edit'].map(
    (m) => ref.current[m] ?? createRef()
  )

  // useCallback to memorize the getProducts function
  const getProducts = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:8000/products')
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, [])

  const resetProduct = () => {
    setProduct({ name: '', price: '', stock: '' })
  }

  const openModal = (modal) => {
    modal.classList.remove('invisible')
  }

  const closeModal = (modal) => {
    modal.classList.add('invisible')
  }

  const value = {
    products,
    getProducts,
    product,
    setProduct,
    resetProduct,
    modalCreateRef,
    modalEditRef,
    openModal,
    closeModal
  }

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}
