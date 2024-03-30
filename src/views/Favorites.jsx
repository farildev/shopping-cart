import { useFavoriteStore } from "@/store/useFavoritesStore";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiWarningCircleLight } from "react-icons/pi";


const Favorites = () => {
  const {clearFavorites , removeFromFavorites, favorites} = useFavoriteStore((state) => ({
    favorites : state.favorites,
    clearFavorites : state.clearFavorites,
    removeFromFavorites : state.removeFromFavorites
  }))
  console.log(removeFromFavorites)
  return (
    <div className="">
      <div className="siteContainer py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-medium">My Favorites</h1>
            <div className="text-md font-base flex items-center gap-2">
              <div>
                Total Products : <span className="font-semibold text-yellow-500">{favorites.length}</span>
              </div>
              <button onClick={clearFavorites} className="text-xl p-2 border border-gray-500/80 rounded-md"><FaRegTrashAlt /></button>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-10">
              {
                favorites.length == 0 ? <div className="w-full h-full py-[100px] flex items-center justify-center">
                  <div className=" w-full h-full flex items-center text-8xl justify-center text-gray-400 flex-col ">
                    <PiWarningCircleLight />
                    <span className="text-4xl mt-4 text-gray-400">Basket is empty</span>
                  </div>
                </div> : 
                favorites.map((item) => (
                  <div key={item.id} className="border border-gray-500/50 p-5 flex justify-between rounded-md gap-10">
                    <div className="w-[8%] h-[100px]">
                      <img className="w-full h-full object-cover object-center" src={item.image} alt="Product image" />
                    </div>
                    <div className="w-[80%] flex flex-col gap-2">
                      <h1 className="text-lg font-semibold">{item.title}</h1>
                      <p className="text-sm w-2/3">{item.description.substr(0,175)}</p>
                    </div>
                    <div>
                      <button onClick={() => removeFromFavorites(item.id)} className="bg-yellow-500 text-black rounded-md p-3">Delete</button>
                    </div>
                  </div>
                ))
              }
              
          </div>
      </div>
    </div>
  )
}

export default Favorites