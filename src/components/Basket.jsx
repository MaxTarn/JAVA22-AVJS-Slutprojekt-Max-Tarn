import { useEffect, useState } from "react"

export default function Basket({basket, setBasket, products}){

    const [combinedPrice, setCombinedPrice] = useState()
    useEffect(()=>{
        console.log(basket)
    }, [basket])


    function displayBasket(){

        //when there are no things in basket
        if(basket.length == 0){

            return(
                <p>No Items in basket</p>
            )

        //when there are things in basket
        }else{

            return(
                <p>Basket: {basket.length} items</p>
            )

        }

    }
    
    return(
        displayBasket()
    )
   

    
}