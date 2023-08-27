import React from 'react'

export default function Modal({onGetProduct}) {
// co dieu kien nay de neu bien null thi khong hien loi-->Conditional rendering
  if(!onGetProduct){

        return null

  }
  return (
    
      
     
      
     
  <div className=" container modal-dialog mt-5 card">
          <h5 className="modal-title text-center fw-bolder fs-2 text-primary">Thông tin chi tiết sản phẩm</h5>
    
    
    
    <div className='row pt-3'>
              <div className="col  text-center">
                    <p className='text-center fw-bold fs-3'>{onGetProduct.name}</p>
                    <img src={onGetProduct.image} width='305px' height='250vh'/>
              </div>
              <div className="col ">

                           <div className=" ">
                                            <span className='fw-bold fs-5 '>Loại sản phẩm: </span>
                                           <span>{onGetProduct.alias}</span>
                           </div>

                           <hr/>
                            <div>

                                           <span className='fw-bold fs-5'>Giá: </span>
                                           <span>{onGetProduct.price}</span>
                            </div>
                            <hr/>
                             <div>

                                        <span className='fw-bold fs-5'>Số lượng: </span>
                                        <span className=''>{onGetProduct.quantity}</span>
                            </div>
                           
                            <hr/>
                            <div>

                                        <span className='fw-bold fs-5'>Mô tả ngắn: </span>
                                        <span className=''>{onGetProduct.shortDescription}</span>
                            </div>
                            <hr/>
                            <div>

                                        <span className='fw-bold fs-5'>Mô tả: </span>
                                        <span className=''>{onGetProduct.description}</span>
                            </div>
                     

                   
              </div>












      </div>



  </div>
    
  


   
     
 
 
  

    
  )
}

