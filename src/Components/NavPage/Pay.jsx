import React from 'react'
import Navbars from '../Navbar/Navbars'

function Pay() {
  return (
    <div>
      <Navbars/>
      <div className='h-[200px] w-[100%] border border-red-700 mt-5'>
  <div className='h-[50px] w-[80%] justify-between border border-blue-700 flex gap-5 m-auto'>
    <button className='text-[16px] leading-[19px] text-[#1e3932] font-medium'>My Starbucks Cards</button>
    <div className='gap-3 flex text-center'>
      <button className='font-medium text-[13px] leading-[15px] text-[#00754a] '> My Starbucks Cards</button>
      <button className='bg-green-700 text-white rounded-lg text-xs px-8 h-10 mt-1 text-[12px] leading-[28px] font-normal' >
  Add Card
</button>

    </div>
  </div>
</div>


    </div>
  )
}

export default Pay
