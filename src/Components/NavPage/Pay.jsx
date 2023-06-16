import React from 'react'
import Navbars from '../Navbar/Navbars'

function Pay() {
  return (
    <div>
      <Navbars />
      <div className='h-fit w-[100%] border border-red-700 mt-5'>
        <div className='h-[50px] w-[80%] justify-between bg-[#B2D396] flex gap-5 m-auto'>
          <button className='text-[16px] leading-[19px] text-[#1e3932] font-medium'>My Starbucks Cards</button>
          <div className='gap-3 flex text-center'>
            <button className='font-medium text-[13px] leading-[15px] text-[#00754a] '> My Starbucks Cards</button>
            <button className='bg-green-700 text-white rounded-lg text-xs px-8 h-10 mt-1 text-[12px] leading-[28px] font-normal' >
              Add Card
            </button>

          </div>
        </div>
        <div className='h-[350px] w-[100%] border border-orange-500 bg-[#1E3932]'>
          <div className='flex m-auto gap-8 h-[250px] w-[800px]'>

            <div className='h-[300px] w-[325px] border border-white bg-slate-100 '>
              <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/c08a5364_1d63_4d53_8bba_6b95bd1b05fe_6_90ea914d7c.png" alt="fist-img" />

              <div className='flex border border-black'>
                <span className='left-0'>
                  <h2>Aroma</h2>
                  <p>*5867</p>
                </span>
                <span className=''>
                  <h1>₹ 0.00</h1>
                </span>
              </div>
            </div>

            <div className='h-[300px] w-[325px] border border-white bg-slate-100'>
              <img src="https://www.starbucks.in/assets/images/bg_pattern.svg" alt="second-img-with-background" />
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