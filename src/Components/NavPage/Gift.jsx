import { Button } from 'flowbite-react'
import React from 'react'

function Gift() {
   return (
      <div>
         <h1>Gift page</h1>
         <div className='mt-5 border border-red-700 h-[300px] bg-green-600'>
            <img className='h-[95%] mt-2 p-5 ml-20' src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Rectangle_641_8fad2fb0b9.png" alt="" />

         </div>

         {/* ********************************************************************************************************** */}

         <div>
            <div className=' h-14 mt-5 bg-gray-400'>
               <Button.Group className=' mr-32'>
                  <span> <img src="https://www.starbucks.in/assets/icon/left-icon.svg" alt="left" /></span>


                  <button className='ml-5 hover:text-green-700' >
                     FEATURED
                  </button>
                  <span className='ml-10 mt-4'>|</span>
                  <button className='ml-5 hover:text-green-700' >
                     ANYTIME
                  </button>
                  <span className='ml-10  mt-4'>|</span>
                  <button className='ml-5 hover:text-green-700'  >
                     CONGRATULATIONS
                  </button>
                  <span className='ml-10  mt-4'>|</span>
                  <button className='ml-5 hover:text-green-700' >
                     THANK YOU
                  </button>
                  <div>
                     <span> <img src="https://www.starbucks.in/assets/icon/right-icon.svg" alt="right" /></span>
                  </div>
               </Button.Group>
            </div>
         </div>
         {/* ********************************************************************************************************** */}
         <div className='text-2xl font-medium leading-7 '><h1 className='mt-5 text-left ml-3 '>ANYTIME</h1>
            <div className='flex-grow h-px bg-gray-400 mt-5'></div>
         </div>

         {/* ********************************************************************************************************************* */}
         <div className=' h-[200px] mt-3' >
            <div className=' flex space-x-20 justify-center'>
               <div className='h-[189px] w-[302px] bg-[#DDDDDD] shadow-gray-500 flex gap-5'>
                  <img className='h-[100px] w-[140] mt-6 ml-[-50px] rounded-md' src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/17d2c94d_1bbe_47d5_874c_c32af5bb2c18_fc9ce3422f.png" alt="" />

                  <div className='h-auto  border  mt-6 text-left space-y-2 ' >
                     <div className='text-sm font-medium leading-4 text-[#000000] '>
                        <p>India Exclusive </p>
                     </div>
                     <div className='text-xs font-normal leading-4 text-[#212529]'>
                        <p>Bring in the festive season and make each celebration memorable.</p>
                     </div>
                     <div className='text-sm font-medium leading-4 '>
                        <button className='rounded-lg bg-green-500 mt-8 text-[#ffff] h-8 w-20'>Add Item</button>
                     </div>
                  </div>
               </div>

               <div className='h-[189px] w-[302px] bg-[#DDDDDD] shadow-gray-500 flex gap-5'>
                  <img className='h-[100px] w-[140] mt-6 ml-[-50px] rounded-md' src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/71d3780c_be6e_46b1_ab01_8a2bce244a7f_1_26502c2483.png" alt="" />

                  <div className='h-auto  border  mt-6 text-left space-y-2 ' >
                     <div className='text-sm font-medium leading-4 text-[#000000] '>
                        <p>Starbucks Coffee </p>
                     </div>
                     <div className='text-xs font-normal leading-4 text-[#212529]'>
                        <p>Starbucks is best when shared. Treat your pals to a good cup of coffee.</p>
                     </div>
                     <div className='text-sm font-medium leading-4 '>
                        <button className='rounded-lg bg-green-500 mt-8 text-[#ffff] h-8 w-20'>Add Item</button>
                     </div>
                  </div>
               </div>

               <div className='h-[189px] w-[302px] bg-[#DDDDDD] shadow-gray-500 flex gap-5'>
                  <img className='h-[100px] w-[140px] mt-6 ml-[-50px] rounded-md' src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/7c6f7c64_3f89_4ba2_9af8_45fc6d94ad35_df43378185.jpg" alt="" />

                  <div className='h-auto  border  mt-6 text-left space-y-2 ' >
                     <div className='text-sm font-medium leading-4 text-[#000000] '>
                        <p>U Keep Me Warm </p>
                     </div>
                     <div className='text-xs font-normal leading-4 text-[#212529]'>
                        <p>Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card.</p>
                     </div>
                     <div className='text-sm font-medium leading-4 '>
                        <button className='rounded-lg bg-green-500 mt-8 text-[#ffff] h-8 w-20'>Add Item</button>
                     </div>
                  </div>

               </div>
            </div>
         </div>

         {/* ******************************************************************************************************* */}
         <div className='text-2xl font-medium leading-7 '><h1 className='mt-5 text-left ml-3 '>Congratulations</h1>
         </div>
         <div className='flex-grow h-px bg-gray-400 mt-5'></div>
         <div className='h-[300px] '>
            <div className='mt-6 ml-32'>
               <div className='h-[189px] w-[302px] bg-[#DDDDDD] shadow-gray-500 flex gap-5'>
                  <img className='h-[100px] w-[140px] mt-6 ml-[-50px] rounded-md' src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/97ee3280_2f05_43ad_bd94_f5c184d4f502_1_2d1b049023.png" alt="" />

                  <div className='h-auto  border  mt-6 text-left space-y-2 ' >
                     <div className='text-sm font-medium leading-4 text-[#000000] '>
                        <p>Congrats</p>
                     </div>
                     <div className='text-xs font-normal leading-4 text-[#212529]'>
                        <p>Coffee. Cheer. Celebrate. Enjoy each of your special moments with Starbucks.</p>
                     </div>
                     <div className='text-sm font-medium leading-4 '>
                        <button className='rounded-lg bg-green-500 mt-8 text-[#ffff] h-8 w-20'>Add Item</button>
                     </div>
                  </div>

               </div>
            </div>

         </div>
      </div>
   )
}

export default Gift
