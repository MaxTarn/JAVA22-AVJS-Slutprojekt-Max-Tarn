import Product from "./Product"

//the container for all the diffrent products

export default function Products({ products, addToBasket}){

    if(products != undefined){
        return (
            <div className="all-products-container">
                <Product product={products[0]} addToBasket={addToBasket} />
                <Product product={products[1]} addToBasket={addToBasket} />
                <Product product={products[2]} addToBasket={addToBasket} />
                <Product product={products[3]} addToBasket={addToBasket} />
                <Product product={products[4]} addToBasket={addToBasket} />
                <Product product={products[5]} addToBasket={addToBasket} />
                <Product product={products[6]} addToBasket={addToBasket} />
            </div>
        )
    }
}