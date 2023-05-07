import { useDebugValue, useEffect, useState } from "react"
import Product from "./Product"

export default function Products({setProducts, updateProducts, addToBasket}){

    const[product0, setproduct0] = useState()
    const[product1, setproduct1] = useState()
    const[product2, setproduct2] = useState()
    const[product3, setproduct3] = useState()
    const[product4, setproduct4] = useState()
    const[product5, setproduct5] = useState()
    const[product6, setproduct6] = useState()

    useEffect(()=>{
        updateProducts().then((result) =>{
            setProducts(result)
            setproduct0(result[0])
            setproduct1(result[1])
            setproduct2(result[2])
            setproduct3(result[3])
            setproduct4(result[4])
            setproduct5(result[5])
            setproduct6(result[6])
        })
    })

    return(
        <div className="all-products-container">
            <Product product={product0} setProduct={setproduct0} addToBasket={addToBasket}/>
            <Product product={product1} setProduct={setproduct0} addToBasket={addToBasket}/>
            <Product product={product2} setProduct={setproduct0} addToBasket={addToBasket}/>
            <Product product={product3} setProduct={setproduct0} addToBasket={addToBasket}/>
            <Product product={product4} setProduct={setproduct0} addToBasket={addToBasket}/>
            <Product product={product5} setProduct={setproduct0} addToBasket={addToBasket}/>
            <Product product={product6} setProduct={setproduct0} addToBasket={addToBasket}/>
        </div>
    )
}