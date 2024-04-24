import ProductCart from "@/components/ProductCart";
import Spinner from "@/components/Spinner";
import axios from "axios"
import Hero from "@/layouts/Hero";
import { useEffect, useState } from "react"
const Home = () => {
  const [products, setProducts] = useState([]);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      setPending(false);
      setProducts(response.data);
    })
    .catch(error => {console.log('Error', error)})
  },[])
  return (
    <div className="h-screen flex">
        <div className="siteContainer">
          <Hero />
          <div className="flex items-center justify-between py-[20px]">
            <h1 className="text-2xl font-medium">My Products</h1>
            <div className="text-md font-base">
              Total Products : <span className="font-semibold text-yellow-500">{products.length}</span>
            </div>
          </div>
          <div className="pb-5">
            {
              pending ? <div className="w-full h-screen flex items-center justify-center text-4xl"> <Spinner /> </div> : <div className="grid grid-cols-3 mt-5 gap-5">
                {
                  products.map((product) => (
                    <ProductCart key={product.id} product={product} />
                  ))
                }
              </div>
              
            }
          </div>
        </div>
    </div>
  )
}

export default Home