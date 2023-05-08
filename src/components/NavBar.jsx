import { useEffect } from "react"
import MiniBasket from "./MiniBasket";
import Product from "./Product";

//the "navbar", basically the two button at the top left, 
//that controll if you are on the basket site of the Products site

export default function NavBar({location, setLocation, basket, products,fetchProducts, setProducts}){

    //fetches the new data from firebase
    function goToProducts(){
        fetchProducts().then((data)=>{
            setProducts(data)
            setLocation('Products')
        })
        
        
    }

    //goes to the 'basket' site
    function goToBasket(){
        setLocation('Basket')
    }

    //when location changes, this prints the new location to the console
    useEffect(()=>{
        console.log("Changed location to: ",location);
    }, [location])

    return (
        <nav>
            <button onClick={goToProducts} >Products</button>
            <button onClick={goToBasket} >Basket</button>
            <MiniBasket basket={basket} products={products}/>
        </nav>
    )
}