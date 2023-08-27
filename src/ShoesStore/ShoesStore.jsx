import React, { useState } from 'react'
import data from "./data.json"
import ProductList from './ProductList'
import Modal from './Modal.jsx'

export default function ShoesStore() {

const [getProduct, setGetProduct] = useState(null);

//let nhan=null;
const handleGetDetails = (product)=>{
  
  setGetProduct(product)
  //nhan=product;
  
}

//console.log(nhan);
  return (
   <>
       <h1 className='text-dark text-center' >Shoes Shop</h1>
       <ProductList productsData={data} onGetDetails={handleGetDetails} />
       
       <Modal  onGetProduct={getProduct}/>
    



       
       
       
       
       
       
  </>
  )
}
