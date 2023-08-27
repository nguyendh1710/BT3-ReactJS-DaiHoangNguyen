import React from 'react'

export default function ProductItem({product , onGetDetails}) {
  return (
    

        




    <div className='item card mt-3 '>

           
          
          <div className='itemBody mx-2 ' onClick={()=>onGetDetails(product)}>
          <div className='itemImg text-center'><img src={product.image} alt={product.name} width='305px'/></div>
                <h3 className='itemName'>{product.name}</h3>
                <p className='itemPrice'>{product.price}</p>

                

          </div>
          <div className='itemButton mx-2 '>
                  
                  
                  <button className='itemButton bg-dark text-white'> Add to card </button>
                  <i className="fa-solid fa-cart-shopping"></i>
         </div>
    </div>
    
  )
}
