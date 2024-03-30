import { RiShoppingBasket2Line } from "react-icons/ri";
import {useCartStore} from "@/store/useCartStore";
const ProductCart = ({product}) => {
  const {addToCart ,cart} = useCartStore((state) => ({
    cart : state.cart,
    addToCart : state.addToCart
  }))
  console.log(cart)
  return (
    <div className="rounded-lg border border-gray-500/50">
                  <div className="h-[250px] w-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={product.image} alt="Product image" />
                  </div>
                  <div className="flex flex-col p-5">
                    <h1 className="mt-5 text-lg">{product.title.substr(0,25)}</h1>
                    <div className="flex items-center justify-between mt-5">
                      <span className="text-2xl font-semibold">{product.price.toFixed(0)}$</span>
                      <button onClick={() => addToCart(product)} className="bg-yellow-500 p-2 rounded-md text-2xl text-black">
                        <RiShoppingBasket2Line />
                      </button>
                    </div>
                  </div>
    </div>
  )
}

export default ProductCart