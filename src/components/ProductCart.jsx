import { RiShoppingBasket2Line } from "react-icons/ri";
import {useCartStore} from "@/store/useCartStore";
import { useFavoriteStore } from "@/store/useFavoritesStore";
import { IoHeart } from "react-icons/io5";

const ProductCart = ({product}) => {
  const {addToCart } = useCartStore((state) => ({
    addToCart : state.addToCart
  }))
  const {addToFavorites } = useFavoriteStore((state) => ({
    addToFavorites : state.addToFavorites
  }))
  return (
    <div className="rounded-lg border overflow-hidden border-gray-500/50">
                  <div className="h-[250px] w-full p-5 rounded-lg overflow-hidden">
                    <img className="h-full w-full object-cover" src={product.image} alt="Product image" />
                  </div>
                  <div className="flex flex-col p-5">
                    <h1 className="mt-5 text-lg">{product.title.substr(0,25)}</h1>
                    <div className="flex items-center justify-between mt-7">
                      <span className="text-3xl font-semibold">{product.price.toFixed(0)} $</span>
                      <div className="flex items-center gap-2">
                        <button onClick={() => addToFavorites(product)} className="p-2 rounded-md text-2xl text-white bg-red-600">
                          <IoHeart />
                        </button>
                        <button onClick={() => addToCart(product)} className="bg-yellow-500 p-2 rounded-md text-2xl text-black">
                          <RiShoppingBasket2Line />
                        </button>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default ProductCart