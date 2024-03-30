import ProductCart from "@/components/ProductCart";
import axios from "axios"
import { useEffect, useState } from "react"
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {console.log('Error', error)})
  },[])
  return (
    <div className="">
        <div className="siteContainer py-[20px]">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-medium">My Products</h1>
            <div className="text-md font-base">
              Total Products : <span className="font-semibold text-yellow-500">{products.length}</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-10">
            {
              products.map((product) => (
                <ProductCart key={product.id} product={product} />
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Home