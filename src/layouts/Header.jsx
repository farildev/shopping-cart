import { NavLink, Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useCartStore } from "@/store/useCartStore";

const Header = () => {
  const {cart} = useCartStore((state) => ({
    cart : state.cart
  }))
  return (
    <header className="w-full py-6 border-b border-gray-500/50 fixed top-0 left-0 right-0 z-10 bg-black">
      <div className="siteContainer flex justify-between items-center">
        <Link to={'/'} className="text-2xl font-semibold">
          Shop<span className="text-yellow-500">N1</span>
        </Link>
        <nav className="">
          <ul className="text-2xl flex items-center gap-5">
            <NavLink className={'relative p-3'} to={'/cart'}><MdOutlineShoppingCart /> <span className="bg-red-500 p-2 w-2 h-2 text-xs flex items-center justify-center rounded-full absolute top-0 right-0">{cart.length}</span></NavLink>
            <NavLink to={'/favorites'}><FaRegHeart /></NavLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header