import { useEffect, useState } from "react";

//handles the <select> that is located in the navbar, and handles the sorting of the products

export default function({products, setProducts, firebaseUrl}){

    const [productArr, setProductArr] = useState()
    
    //when products are changed
    useEffect(() => {

        const tempArr = Object.entries(products)
        setProductArr(tempArr)

    }, [ products])


    //sorts the products acording to what was chosen in the <select>
    function sort(event){
       let sortby = event.target.value

        let tempArr = productArr
        switch (sortby) {
            case 'numDesc':
                tempArr.sort((a,b)=> b[1].pris - a[1].pris)
                break
            case 'numAsc':
                tempArr.sort((a,b)=> a[1].pris - b[1].pris)
                break
        }
       

       let sorted = {}

        for (const [index, value] of tempArr.entries()) {
            sorted[index] = value[1]
        }

        
        setProducts(Object.values(sorted))

    }

    return(
        <select name="sort" id="sort-select" onChange={sort}>
            <option defaultChecked>Sort:</option>
            <option value="numDesc">Numbers: big to small</option>
            <option value="numAsc">Numbers: small to big</option>
        </select>
    )
}






// let sortBy = event.target.value
// const tempArr = productArr;
// switch(sortBy){
//     case 'numDesc':
//         tempArr = productArr;
//         console.log(tempArr);
        
//         tempArr.sort((a,b)=> b[1].pris - a[1].pris)
//         const sorted = tempArr.reduce((tempArr, [key, value]) => ({ ...tempArr, [key]: value }), {});
//         sorted.length = 7

//         console.log("The sorted products ",sorted);
//         setProducts(tempArr)
//         console.log();
//         console.log(tempArr);
//         break;
// }

