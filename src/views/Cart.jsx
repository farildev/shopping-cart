import {useCartStore} from "@/store/useCartStore";
import { PiWarningCircleLight } from "react-icons/pi";

const Cart = () => {
  const {cart, clearCart,removeFromCart} = useCartStore((state) => ({
    cart : state.cart,
    clearCart : state.clearCart,
    removeFromCart : state.removeFromCart
  }));

  const clearBasket = () => {
    clearCart();
  }
  const totalPrice = cart.reduce((total, item) => total + item.price,0);

  return (
    <div className="py-[100px]">
      <div className="siteContainer py-5">
          <div className="flex-1 flex justify-between mt-10 gap-3 py-10">
            <div className="flex flex-col gap-5 w-[75%]">
                  
                  {
                    cart.length == 0 ? <div className="w-full h-full py-[100px] flex items-center justify-center">
                    <div className=" w-full h-full flex items-center text-8xl justify-center text-gray-400 flex-col ">
                      <PiWarningCircleLight />
                      <span className="text-4xl mt-4 text-gray-400">Basket is empty</span>
                    </div>
                  </div> : 
                    cart.map((item) => (
                      <div key={item.id} className="border border-gray-500/50 p-5 flex justify-between rounded-md gap-10">
                        <div className="w-[8%] h-[100px]">
                          <img className="w-full h-full object-cover object-center" src={item.image} alt="Product image" />
                        </div>
                        <div className="w-[80%] flex flex-col gap-2">
                          <h1 className="text-lg font-semibold">{item.title}</h1>
                          <p className="text-sm w-2/3">{item.description.substr(0,175)}</p>
                        </div>
                        <div>
                          <button onClick={() => removeFromCart(item.id)} className="bg-yellow-500 text-black rounded-md p-3">Delete</button>
                        </div>
                      </div>
                    ))
                  }
              </div>
              {
                cart.length > 0 ? <div className="h-full border-2 border-gray-500/30 w-[23%] p-5 rounded-md flex flex-col gap-2">
                <div className="flex justify-between items-center text-xl">Total Price : <span className="font-semibold">{totalPrice}$</span></div>
                <div className="flex justify-between items-center text-xl">Total Item : <span className="font-semibold">{cart.length} item</span></div>
                <div className="flex flex-col gap-2 mt-3">
                  <button className="bg-red-600 w-full p-2 rounded-md" onClick={clearBasket}>Delete All</button>
                  <button className="bg-white text-black w-full p-2 rounded-md">Buy items</button>
                </div>
              </div> : ""
              }
          </div>
      </div>
    </div>
  )
}

export default Cart