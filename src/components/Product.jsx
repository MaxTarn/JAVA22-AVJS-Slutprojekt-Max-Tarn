import { useEffect } from "react";
import { useState } from "react";

export default function Product({product, setProduct,  addToBasket}){

    const [imgSrc, setImgSrc] = useState()
    const [price, setPrice] = useState()
    const [name, setName] = useState()
    const [count, setCount] = useState()

    //const [state, setState] = useState({ fName: "", lName: "" });

    useEffect(()=>{
        if(product != undefined){
            setImgSrc(product.bild)
            setPrice(product.pris)
            setName(product.name)
            setCount(product.count)
        }
    })

    function handleClick(){
        if(product == undefined) return
        if(product.count <=0) return
        if(addToBasket(product.id)){
            let bild = product.bild  
            let pris = product.pris  
            let name = product.name  
            let count = product.count
            let id = product.id  
            //setProduct(...product, )
        }
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