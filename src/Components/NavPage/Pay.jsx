import React from 'react'
import Navbars from '../Navbar/Navbars'

function Pay() {
  return (
    <div>
      <Navbars />
      <div className='h-fit w-[100%] mt-5'>
        <div className='h-[50px] w-[80%] justify-between bg-[#B2D396] flex gap-5 m-auto'>
          <button className='text-[16px] leading-[19px] text-[#1e3932] font-medium'>My Starbucks Cards</button>
          <div className='gap-3 flex text-center'>
            <button className='font-medium text-[13px] leading-[15px] text-[#00754a] '> My Starbucks Cards</button>
            <button className='bg-green-700 text-white rounded-lg text-xs px-8 h-10 mt-1 text-[12px] leading-[28px] font-normal' >
              Add Card
            </button>

          </div>
        </div>
        <div className='h-[350px] w-[100%] bg-[#1E3932]'>
          <div className='flex m-auto gap-8 h-[250px] w-[800px] p-5'>

            <div className='h-[300px] w-[325px]  bg-slate-100 '>
              <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/c08a5364_1d63_4d53_8bba_6b95bd1b05fe_6_90ea914d7c.png" alt="fist-img" />

              <div className='flex gap-[210px] mt-[20px] cursor-pointer' >
                <span className='left-0 '>
                  <h2 className='leading-4 text-[14px] font-medium text-[#006241]'>Aroma</h2>
                  <p>*5867</p>
                </span>
                <span className='mt-[7px] text-[24px] leading-[29px] font-medium text-[#006241] '>
                  <h1>₹0.00</h1>
                </span>
              </div>
         {/* last div of firs box */}
          
          <div className='h-5 flex gap-[150px] cursor-pointer mt-3'> 
           <h5 className='text-[10px] leading-[12px] font-medium text-[#BDBDBD]'>Updated at 02.650 15/06/23</h5>

           <span className='flex gap-2 '>
           <img src="	https://www.starbucks.in/assets/icon/Maskrefresh.svg" alt="refres-icon" />
           <img src="https://www.starbucks.in/assets/icon/Masksetting.svg" alt="Setting-icon" />
           </span>
          </div>

            </div>

{/* _________________________________________________second-box_____________________________________________________________ */}
           
<div className='h-[300px] w-[325px] border border-white bg-slate-100 relative'>
  <img src="https://www.starbucks.in/assets/images/bg_pattern.svg" alt="second-img-with-background" />
  <div className='absolute inset-0 flex flex-col justify-center items-center '>
    <h1 style={{ whiteSpace: 'nowrap' }} className='text-black'>Add New Starbucks Card</h1>
    <span className='flex justify-center items-center bg-black w-[110px] rounded-md'>
      <img src="https://www.starbucks.in/assets/icon/add_circle_darkened_green.svg" alt="add-card-icon" />
      <button className='text-white ml-2 '>Add Card</button>
    </span>
  </div>
</div>





          </div>




        </div>





      </div>
    </div>
  )
}

export default Pay


{/* <span className='' >
              <img  className='absolute right-0 ' src="https://www.starbucks.in/assets/icon/Group%20625.svg" alt="small-tree-right-side" />
            </span>
            <span>
              <img className='mt-[200px]' src="	https://www.starbucks.in/assets/images/green-left-leaf.svg" alt="left-side-image" />
            </span> */}