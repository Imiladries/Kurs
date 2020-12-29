import IProductsListProps from "./Props/IProductsListProps";

import React, {useEffect,useState} from 'react';
import ProductsPage from './Productspage';
 
const ProductsList:React.FC<IProductsListProps> = ({setProductsInCart})=>{


const[products,setProducts] = useState<object[]>([])

useEffect(()=>{
     fetch(process.env.MIX_APP_URL + '/api/products')
    .then(response=>response.json())
    .then(data=>setProducts(data.data))
    
}, [])


    return(products
        ?<ProductsPage products={products} setProductsInCart={setProductsInCart}/>:<span>Load</span>
    );
}

export default ProductsList;
