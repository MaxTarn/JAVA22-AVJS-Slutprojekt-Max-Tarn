import { useState } from 'react'
import { useEffect } from 'react'
import '../css/App.css'
import PlaceholderComponent from './placeholderComponent'
import Product from './Product'

export default function App(){
    const firebaseUrl = 'https://java22-avjs-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/.json'
    const [products, setProducts] = useState('')

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
    




    return(
        <div>
            <Product products={products} updateProducts={updateProducts}/>
        </div>
    )
}