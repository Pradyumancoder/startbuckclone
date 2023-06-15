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
        image: 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Small/100501.jpg',
        title: 'Java Chip Frappuccino',
        ptag: "TALL(354 ML) .392 kcal",
        description: 'We blend mocha sauce and Frappuccino® chips with Frappuccino....',
        price: 123
      },
      {
        image: 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Small/100433.jpg',
        title: 'Caffe Americano',
        ptag: "SHORT(237 Ml) .0 kcal",
        description: 'Rich in flavour, full-bodied espresso with hot water in true...',
        price: 123
      },
      {
        image: 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Small/100501.jpg',
        title: 'Java Chip Frappuccino',
        ptag: "TALL(354 ML) .392 kcal",
        description: 'We blend mocha sauce and Frappuccino® chips with Frappuccino....',
        price: 123
      },
      {
        image: 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Small/100433.jpg',
        title: 'Caffe Americano',
        ptag: "SHORT(237 Ml) .0 kcal",
        description: 'Rich in flavour, full-bodied espresso with hot water in true...',
        price: 123
      }
    ],
    drinks: [
      {
        image: 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Small/113842.jpg',
        title: 'Belgium Chocolate Latte',
        ptag: "SHORT(237 ML) .235 Kcal",
        description: 'Espresso with richly flavoured Belgium chocolate sauce, moch...',
        price: 123
      },
      {
        image: 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Small/113842.jpg',
        title: 'Belgium Chocolate Latte',
        ptag: "SHORT(237 ML) .235 Kcal",
        description: 'Espresso with richly flavoured Belgium chocolate sauce, moch...',
        price: 123
      },
    ],
    food: [
      {
        image: 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Small/104108.jpg',
        title: 'Chilli Cheese Toast',
        ptag: "PER SERVE (140 g) - 471 Kcal",
        description: 'Cheesy and fiery snack on a toasted French-style baguette, t...',
        price: 123
      }
    ],
    merchendise: [
      {
        image: 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Small/113650_1.jpg',
        title: 'Ceramic Pink and White Mug - 295ml',
        ptag:"PER SERVE (140 g) - 471 Kcal",
        description: 'Ceramic hand painted mug with glossy glaze interior and regu...',
        price: 123
      }
    ],
    coffee: [
      {
        image: '	https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Small/113633.jpg',
        title: 'Tribute Blend',
        ptag:"PER SERVE (140 g) - 471 Kcal",
        description: 'Tribute blend is a tribute to accomplishments of coffee prod...',
        price: 123
      }
    ],
    eat: [
      {
        image: 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Small/103599_1.jpg',
        title: 'Almond Biscotti',
        ptag: "PER SERVE (50 g) - 409 kCal",
        description: 'Delicious on its own or a perfect pairing with your favorite...',
        price: 123
      },
      {
        image: 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Small/112672.jpg',
        title: 'Raksha Bandhan Chocolate Box',
        ptag: "PER SERVE (50 g) - 409 kCal",
        description: 'A box of chocolates with 2 pieces each of Tiramisu, Dark cho..',
        price: 123
      },
    ]
  };

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };


  return (
    <div>
      <Navbars />
      <div className="h-[90px] w-[100%] border border-black bg-[#1E3932]">
        <div className="h-fit w-[350px] mt-6 ml-20 flex gap-3">
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
        <p className='mt-2 text-left ml-3 text-sm m-0 font-[400] leading-[21px] color-[#212529]'>{page === 'bestseller'  && 'Everyones favorite Starbucks put together in a specially curated collection.'}</p>

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





      <div className='grid gap-5 grid-cols-3 grid-rows-6  h-fit m-auto w-[1200px]'>
        {pages[page].map((item, index) => (


          <div className='m-auto border h-[220px] bg-[#F9F9F9] hover:shadow-md'>
            <div className='flex ml-9'>
              <div className='h-[100px]  w-[160px] border border-black justify-start mt-2 rounded-none '>

                <img className=' rounded-[6.5rem] ml-0 mt-0 ' src={item.image} alt='' />
              </div>
              <div className='p-5 h-[217px] border border-red-700 '>
              

                <div className='text-start'>
                  <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                  <div className='font-medium leading-7 text-start text-lg '> <span> {item.title}</span>  </div>
                  <div>
                    <span>{item.ptag}</span>
                  </div>
                  <div className='font-thin leading-5'> <span>{item.description}</span>  </div>
{/* ________________________________________________________________started button code_____________________________________________________________________ */}

                  <div className='flex border border-black justify-around mt-3'>
              <div>
                <h4>₹{item.price}</h4>
              </div>
              <div>
                <button className='bg-green-500  text-white rounded-lg w-20'>Add Cart</button>
              </div>

            </div>

{/* _______________________________________________________________started button code end____________________________________________________________________________ */}

                </div>
              </div>
            </div>

           


          </div>
        ))}
      </div>


      {/* _________________________________________________________________________________________________ */}

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
      <FooterP />
    </div>
  )
}

export default Order
