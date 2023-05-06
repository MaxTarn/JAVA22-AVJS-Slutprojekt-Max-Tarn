import { useEffect } from "react";
import { useState } from "react";

export default function Product({products, updateProducts}){
    const [imgSrc1, setImgSrc1] = useState('')
    const [price, setPrice] = useState('')
    const [name, setName] = useState('')
    const [count, setCount] = useState('')


    useEffect(()=>{
        updateProducts().then((result) =>{
            setImgSrc1(result[0].bild)
            setPrice(result[0].pris)
            setName(result[0].name)
            setCount(result[0].count)
        })
    },[products])

    async function handleClick(){
        updateProducts().then((data) => {
            console.log(data);
            console.log(data[0].bild)
            
        })
        
    }

    return(

        <div>
            <div>
                <h2>{name}</h2>
                <img src={imgSrc1} alt="" />
                <h1>Pris : {price}</h1>
                <p>count : {count}</p>
                
            </div>
            
        </div>
        
    )
}