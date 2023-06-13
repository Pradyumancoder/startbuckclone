import React, { useState } from 'react'
import Navbars from '../Navbar/Navbars'
import { Button, Footer } from 'flowbite-react'
import FooterP from '../Footer/FooterP';
function Order() {

  const [page, setPage] = useState("drinks"); // Initial state is set to 'drinks'

  // Define the data for each page
  const pages = {

    bestseller: [
      {
        image: 'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/17d2c94d_1bbe_47d5_874c_c32af5bb2c18_fc9ce3422f.png',
        title: 'India Exclusive',
        description: 'Bring in the festive season and make each celebration memorable.'
      },
      {
        image: 'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/71d3780c_be6e_46b1_ab01_8a2bce244a7f_1_26502c2483.png',
        title: 'Starbucks Coffee',
        description: 'Starbucks is best when shared. Treat your pals to a good cup of coffee.'
      }
    ],
    drinks: [
      {
        image: 'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/17d2c94d_1bbe_47d5_874c_c32af5bb2c18_fc9ce3422f.png',
        title: 'India Exclusive',
        description: 'Bring in the festive season and make each celebration memorable.'
      },
      {
        image: 'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/71d3780c_be6e_46b1_ab01_8a2bce244a7f_1_26502c2483.png',
        title: 'Starbucks Coffee',
        description: 'Starbucks is best when shared. Treat your pals to a good cup of coffee.'
      }
    ],
    food: [
      {
        image: 'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/97ee3280_2f05_43ad_bd94_f5c184d4f502_1_2d1b049023.png',
        title: 'Congrats',
        description: 'Coffee. Cheer. Celebrate. Enjoy each of your special moments with Starbucks.'
      }
    ],
    merchendise: [
      {
        image: 'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/7c6f7c64_3f89_4ba2_9af8_45fc6d94ad35_df43378185.jpg',
        title: 'U Keep Me Warm',
        description: 'Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card.'
      }
    ],
    coffee: [
      {
        image: 'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/7c6f7c64_3f89_4ba2_9af8_45fc6d94ad35_df43378185.jpg',
        title: 'U Keep Me Warm',
        description: 'Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card.'
      }
    ],
    eat: [
      {
        image: 'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/7c6f7c64_3f89_4ba2_9af8_45fc6d94ad35_df43378185.jpg',
        title: 'U Keep Me Warm',
        description: 'Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card.'
      },
      {
        image: 'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/97ee3280_2f05_43ad_bd94_f5c184d4f502_1_2d1b049023.png',
        title: 'Congrats',
        description: 'Coffee. Cheer. Celebrate. Enjoy each of your special moments with Starbucks.'
      }
    ]
  };

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };


  return (
    <div>
      <Navbars />
      <div className="h-[90px] w-[100%] border border-black bg-[#1E3932]">
        <div className="h-[30px] w-[350px] mt-6 ml-20 flex gap-3">
          <img src="https://www.starbucks.in/assets/icon/Location%20icon%203.svg" alt="location images" />
          <input type="text" className="border border-t-0 border-l-0 border-r-0 border-b border-b-white hover:border-b-white focus:border-b-white bg-[#1E3932]" placeholder="No Store Selected" />
          <div className='flex gap-4 '>
            <img src="https://www.starbucks.in/assets/icon/clock.svg" alt="location timing clock" className='h-6 ' />
            <span className='text-white'>00 min</span>
          </div>
        </div>
      </div>

      <div>
        <div className=' h-14 mt-5 bg-gray-400'>
          <Button.Group className=' mr-32'>
            <span> <img src="https://www.starbucks.in/assets/icon/left-icon.svg" alt="left" /></span>

            <button className={`ml-5 hover:text-green-700 ${page === 'bestseller' && 'text-green-700'}`} onClick={() => handlePageChange('bestseller')}>
              
              Bestseller 
            </button>
            <span className='ml-10 mt-4'>|</span>
            <button className={`ml-5 hover:text-green-700 ${page === 'drinks' && 'text-green-700'}`} onClick={() => handlePageChange('drinks')}>
              Drinks
            </button>
            <span className='ml-10 mt-4'>|</span>
            <button className={`ml-5 hover:text-green-700 ${page === 'food' && 'text-green-700'}} onClick={() => handlePageChange('food')}>
                   food </button>
                    <span className='ml-10 mt-4'>|</span>
                     <button className={ml-5 hover:text-green-700 ${page === 'food' && 'text-green-700'}`} onClick={() => handlePageChange('food')}>
              Food
            </button>
            <span className='ml-10 mt-4'>|</span>
            <button className={`ml-5 hover:text-green-700 ${page === 'merchendise' && 'text-green-700'}`} onClick={() => handlePageChange('merchendise')}>
              Merchendise 
            </button>
            <span className='ml-10 mt-4'>|</span>
            <button className={`ml-5 hover:text-green-700 ${page === 'merchendise' && 'text-green-700'}`} onClick={() => handlePageChange('coffee')}>
              Coffee At Home
            </button>
            <span className='ml-10 mt-4'>|</span>
            <button className={`ml-5 hover:text-green-700 ${page === 'merchendise' && 'text-green-700'}`} onClick={() => handlePageChange('eat')}>
              Ready To Eat 
            </button>
            <div>
              <span> <img src="https://www.starbucks.in/assets/icon/right-icon.svg" alt="right" /></span>
            </div>
          </Button.Group>
        </div>
      </div>
      <div className='text-2xl font-medium leading-7 '>
        <h1 className='mt-5 text-left ml-3 '>{page === 'bestseller' && 'BestSeller'}</h1>

      </div>
      <div className='text-2xl font-medium leading-7 '>
        <h1 className='mt-5 text-left ml-3 '>{page === 'drinks' && 'Drink'}</h1>

      </div>
      <div className='text-2xl font-medium leading-7 '>
        <h1 className='mt-5 text-left ml-3 '>{page === 'food' && 'Food'}</h1>

      </div>
      <div className='text-2xl font-medium leading-7 '>
        <h1 className='mt-5 text-left ml-3 '>{page === 'merchendise' && 'Merchendise'}</h1>
      </div>
      <div className='text-2xl font-medium leading-7 '>
        <h1 className='mt-5 text-left ml-3 '>{page === 'coffee' && 'Coffee At Home'}</h1>

      </div>
      <div className='text-2xl font-medium leading-7 '>
        <h1 className='mt-5 text-left ml-3 '>{page === 'eat' && 'Ready To Eat'}</h1>

        <div className='flex h-px bg-gray-400 mt-6'></div>
      </div>



      <div className='h-[200px] mt-3'>
        <div className='flex space-x-20 justify-center'>
          {pages[page].map((item, index) => (
            <div key={index} className='h-[189px] w-[302px] bg-[#DDDDDD] shadow-gray-500 flex gap-5'>
              <img className='h-[100px] w-[140] mt-6 ml-[-50px] rounded-md' src={item.image} alt='' />

              <div className='h-auto  border  mt-6 text-left space-y-2 '>
                <div className='text-sm font-medium leading-4 text-[#000000] '>
                  <p>{item.title}</p>
                </div>
                <div className='text-xs font-normal leading-4 text-[#212529]'>
                  <p>{item.description}</p>
                </div>
                <div className='text-sm font-medium leading-4 '>
                  <button className='rounded-lg bg-green-500 mt-8 text-[#ffff] h-8 w-20'>Add Item</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='text-2xl font-medium leading-7 '>
        <h1 className='mt-5 text-left ml-3 '>{page === 'food' && 'Food'}</h1>
      </div>
      <div className='flex-grow h-px bg-gray-400 mt-5'></div>
      <div className='h-[300px] '>
        <div className='mt-6 ml-32'>
          {page === 'food' && (
            <div className='h-[189px] w-[302px] bg-[#DDDDDD] shadow-gray-500 flex gap-5'>
              <img className='h-[100px] w-[140px] mt-6 ml-[-50px] rounded-md' src={pages.food[0].image} alt='' />

              <div className='h-auto  border  mt-6 text-left space-y-2 '>
                <div className='text-sm font-medium leading-4 text-[#000000] '>
                  <p>{pages.food[0].title}</p>
                </div>
                <div className='text-xs font-normal leading-4 text-[#212529]'>
                  <p>{pages.food[0].description}</p>
                </div>
                <div className='text-sm font-medium leading-4 '>
                  <button className='rounded-lg bg-green-500 mt-8 text-[#ffff] h-8 w-20'>Add Item</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
<FooterP/>
    </div>
  )
}

export default Order
