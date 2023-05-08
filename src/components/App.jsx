import { useState } from 'react'
import '../css/App.css'
import NavBar from './NavBar'
import Basket from './Basket'
import Products from './Products'
import SortProducts from './SortProducts'

export default function App(){
    const firebaseUrl = 'https://java22-avjs-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/.json'
    const [products, setProducts] = useState('')
    const [basket, setBasket] = useState({length:0})
    const [location, setLocation] = useState()

    const header = {
        //Egenskapsnamnet Content-type behöver citattecken eftersom det innehåller ett bindestreck.
        "Content-type": "application/json; charset=UTF-8"
    }
    const option = {
        method: "GET", //Metoden som ska användas
        headers: header //Header-objektet
    }
    async function fetchProducts(){
        const response = await fetch(firebaseUrl, option)
        return response.json()
    }


    //adds a product to the basket
    function addToBasket(product){

        //does nothing if products hasnt been fetched from database
        if(products == undefined) return false
        
        //if there are no more products left
        if(product.count <= 0) return false

        //iterates through the basket and counts how many products there are that have the same id as product.id
        let productCountInBasket = 0
        for (let index = 0; index < basket.length; index++) {
            if(basket[index].id == product.id) productCountInBasket++
        }

        //returns when you try to add more products than what there is
        if(productCountInBasket >= product.count) return false

        //adds the product to the basket, keeping the products already there, and updating the length of basket
        setBasket((prevState) =>({
            ...prevState,
            length: prevState.length+1,
            [prevState.length]: product

        }))
        return true
    }
    




    //when the button 'Products' is pressed
    if (location == 'Products') {

        return (
            <div>
                <NavBar location={location} setLocation={setLocation} basket={basket} products={products} fetchProducts={fetchProducts} setProducts={setProducts}/>
                <SortProducts products={products} setProducts={setProducts} firebaseUrl={firebaseUrl}/>
                <Products setProducts={setProducts} products={products} fetchProducts={fetchProducts} addToBasket={addToBasket} />
            </div>
        )


        //when the button 'Basket' is pressed
    }else if(location == 'Basket'){


        return(
            <div>
                <NavBar location={location} setLocation={setLocation} basket={basket} products={products} fetchProducts={fetchProducts} setProducts={setProducts}/>
                <Basket basket={basket} setBasket={setBasket} products={products} setLocation={setLocation} firebaseUrl={firebaseUrl}/>
            </div>
        )

        //When first loading in to the page
    }else{


        return(
            <div>
                <NavBar location={location} setLocation={setLocation} basket={basket} products={products} fetchProducts={fetchProducts} setProducts={setProducts}/>
                <SortProducts products={products} setProducts={setProducts} firebaseUrl={firebaseUrl}/>
                <Products setProducts={setProducts} fetchProducts={fetchProducts} addToBasket={addToBasket}/>
            </div>
        )

        
    }
}