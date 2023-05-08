import { useEffect, useState } from "react"

//the 'site' that displays all the products in the basket

export default function Basket({ basket, setBasket, products, setLocation, firebaseUrl }) {

    //converts basket to array
    const [basketArr, setBasketArr] = useState()

    //when there are changes to the basket
    useEffect(() => {
        console.log("Basket", basket)

        //to remove the last entry
        const tempArr = Object.values(basket)
        tempArr.pop()

        setBasketArr(tempArr)

    }, [basket])


    //removes the right amount of products from firebase, coresponding to the basket
    function buyProducts() {

        let body = {
            ...products
        }

        //changes count of each entry in the body, that was also in the basket
        for (let index = 0; index < basketArr.length; index++) {
            console.log(products);
            let indexOfProduct = products.indexOf(basketArr[index])

            body[indexOfProduct].count--
        }

        

        const header = {
            //Egenskapsnamnet Content-type behöver citattecken eftersom det innehåller ett bindestreck.
            "Content-type": "application/json; charset=UTF-8"
        }
        const option = {
            method: "PUT", //Metoden som ska användas
            headers: header, //Header-objektet
            body: JSON.stringify(body)
        }

        console.log(option);
        
        //sends the request to firebase 
        fetch(firebaseUrl, option).then((response) => {
            console.log("response: ", response);
            alert("Bought")
            setBasket({ length: 0 })
            console.log(basket);
        })

    }

    //empties the basket, and returns to the products 'site'
    function emptyBasket() {
        setBasket({ length: 0 })
        setLocation('Products')
    }

    //wont start printing anything if there isnt anything in the basket
    if (basket.length > 0 && basketArr != undefined) {
        return (
            <ul>
                {/* adds an elemet for each item in the basket, with a corresponding picture, and price */}
                {basketArr.map((item, index) => (
                    <li key={index} className="">
                        <img src={item.bild} alt="" height="50px" />
                        <p>Pris: {item.pris}</p>
                    </li>
                ))}

                <li>
                    <button onClick={buyProducts}>BUY</button>
                </li>
                <li>
                    <button onClick={emptyBasket}>Empty Basket</button>
                </li>
            </ul>
        )
    }


}