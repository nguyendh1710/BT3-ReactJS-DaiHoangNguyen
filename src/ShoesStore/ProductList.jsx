import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({productsData, onGetDetails}) {



//    const handleGetDetails = (product)=>{
            

//      onGetDetails(product)

//    }


  return (
    <div className='row cotainer'>
              
          
              {
               
                   
                   productsData.map((product)=>{
                             return(
                             
                              <div  className='col-md-4'  key={product.id}>
                        
                          
                                    <ProductItem product={product} onGetDetails={onGetDetails} />
                      
                              </div>
                              )
                   


                   })

               
              }

           




    </div>
  )
}

