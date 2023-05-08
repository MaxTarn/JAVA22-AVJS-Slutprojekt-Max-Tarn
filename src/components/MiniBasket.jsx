import { useEffect, useState } from "react"

//basically a part of the navbar, shows how many producs are in the basket, and how much moniesssss it costs
export default function MiniBasket({basket, products}){

    const [combinedPrice, setCombinedPrice] = useState(0)

    useEffect(()=>{
        setCombinedPrice(costOfBasket())
    }, [basket])

    function costOfBasket(){
        let combinedCost = 0

        for (let index = 0; index < basket.length; index++) {
            combinedCost = combinedCost + parseInt(basket[index].pris)
        }
        return combinedCost
    }


    function displayBasket(){

        //when there are no things in basket
        if(basket.length == 0){

            return(
                <p>No Items in basket</p>
            )

        //when there are things in basket
        }else{

            return(
                <p>Basket: {basket.length} items. Cost {combinedPrice} monies</p>
            )

        }

    }
    
    return(
        displayBasket()
    )
   

    
}