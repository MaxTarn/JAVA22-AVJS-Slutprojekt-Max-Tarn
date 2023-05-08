import { useEffect } from "react";
import { useState } from "react";

//the individual product that is displayed

export default function Product({product,  addToBasket}){

    const [imgSrc, setImgSrc] = useState()
    const [price, setPrice] = useState()
    const [name, setName] = useState()
    const [count, setCount] = useState()

    
    useEffect(()=>{
        if(product != undefined){
            setImgSrc(product.bild)
            setPrice(product.pris)
            setName(product.name)
            setCount(product.count)
        }
    })

    //adds the product to the basket
    function handleClick(){
        if(product == undefined) return
        if(product.count <=0) return
        addToBasket(product)
    }
    

    return(

        <div className="product-div">
            <h1>{name}</h1>
            <img src={imgSrc} alt="" className="product-img"/>

            <div>
                <h1>Pris : {price}</h1>
                <p>Lagersaldo : {count}</p>  
            </div>

            <button onClick={handleClick}>Add To basket</button>

        </div>
        
    )
}