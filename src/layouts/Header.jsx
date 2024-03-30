import { NavLink, Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full py-6 border-b border-gray-500/50">
      <div className="siteContainer flex justify-between items-center">
        <Link to={'/'} className="text-2xl font-semibold">
          Shop<span className="text-yellow-500">N1</span>
        </Link>
        <nav className="">
          <ul className="text-2xl flex items-center gap-5">
            <NavLink to={'/cart'}><MdOutlineShoppingCart /></NavLink>
            <NavLink><FaRegHeart /></NavLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header