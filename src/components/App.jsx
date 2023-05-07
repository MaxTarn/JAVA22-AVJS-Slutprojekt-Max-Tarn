import { useState } from 'react'
import { useEffect } from 'react'
import '../css/App.css'
import Basket from './Basket'
import Products from './Products'

export default function App(){
    const firebaseUrl = 'https://java22-avjs-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/.json'
    const [products, setProducts] = useState('')
    const [basket, setBasket] = useState([])

    const header = {
        //Egenskapsnamnet Content-type behöver citattecken eftersom det innehåller ett bindestreck.
        "Content-type": "application/json; charset=UTF-8"
    }
    const option = {
        method: "GET", //Metoden som ska användas
        headers: header //Header-objektet
    }
    async function updateProducts(){
        const response = await fetch(firebaseUrl, option)
        return response.json()
    }

    function addToBasket(productId){
        //does nothing if products hasnt been fetched from database
        if(products == undefined) return false
        
        if(products[productId].count <= 0) return false

        //counts how many posts are in the basket, of the current productId
        let productCountInBasket = 0
        for (let index = 0; index < basket.length; index++) {
            if(basket[index] == productId) productCountInBasket++
        }

        //returns when you try to add more products than what there
        if(productCountInBasket >= products[productId].count) return false

        //adds product id in the basket
        setBasket(basket => basket.concat(products[productId].id))

        return true
    }
    




    return(
        <div>
            <Basket basket={basket} setBasket={setBasket} products={products}/>
            <Products setProducts={setProducts} updateProducts={updateProducts} addToBasket={addToBasket}/>
        </div>
    )
}