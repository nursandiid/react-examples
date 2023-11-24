import Index from '../components/product/Index'
import { ProductProvider } from '../context/product.context'

export default function Product() {
  return (
    <div className="my-4">
      <ProductProvider>
        <Index />
      </ProductProvider>
    </div>
  )
}
