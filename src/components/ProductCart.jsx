import { RiShoppingBasket2Line } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import {useCartStore} from "@/store/useCartStore";
import { useFavoriteStore } from "@/store/useFavoritesStore";
import { IoHeart } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCart = ({product}) => {
  const {addToCart } = useCartStore((state) => ({
    addToCart : state.addToCart,
  }))
  const {addToFavorites, toggle:favoriteToggle } = useFavoriteStore((state) => ({
    addToFavorites : state.addToFavorites,
    toggle : state.toggle
  }))


  const handleCart = () => {
    addToCart(product)
    toast.success('🧺 Product added!', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  const handleFavorite = () =>{
    addToFavorites(product)
  }
  return (
    <div className="rounded-lg border overflow-hidden border-gray-500/50">
                  <div className="h-[350px] w-full p-5 rounded-lg overflow-hidden">
                    <img className="h-full w-full object-cover rounded-md" src={product.image} alt="Product image" />
                  </div>
                  <div className="flex flex-col p-5">
                    <h1 className="mt-5 text-xl font-medium">{product.title.substr(0,25)}</h1>
                    <span className="flex items-center gap-1 border border-gray-500/80 w-fit text-yellow-500 p-1 font-medium rounded-md text-sm mt-2"><span className="flex items-center gap-1">Rating : {product.rating.rate} <IoStar /></span></span>
                    <div className="flex items-center justify-between mt-7">
                      <span className="text-4xl font-semibold">{product.price.toFixed(0)} $</span>
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleFavorite(product)} className="p-2 rounded-md text-2xl text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 ">
                          {favoriteToggle ? <IoHeart /> : <IoMdHeartEmpty />}
                        </button>
                        <button onClick={handleCart} className="border border-yellow-500 p-2 rounded-md text-2xl text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-100">
                          <RiShoppingBasket2Line />
                          <ToastContainer />
                        </button>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default ProductCart