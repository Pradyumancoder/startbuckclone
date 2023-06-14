import { Card, Carousel } from 'flowbite-react'
import React from 'react'
import FooterP from '../Footer/FooterP'
import Navbars from '../Navbar/Navbars'

function Home() {
  return (
    <div className='border border-b-red-800 h-fit'>
      <div>
        <Navbars />
      </div>
      <div className='font-sans font-medium leading-7 text-start text-2xl'><h1>Handcrafted Curations</h1></div>
      <div className='border border-black h-40  flex justify-around mt-6 font-normal leading-5 text-base'>
        <div className='h-24 w-24 border border-blue-700 rounded-full'>
          <img className='rounded-full' src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Bestseller.jpg" alt="" />
          <p>Bestseller</p>
        </div>
        <div className='h-24 w-24 border border-blue-700 rounded-full'>
          <img className='rounded-full' src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Drinks.jpg" alt="" />
          <p>Drinks</p>
        </div>
        <div className='h-24 w-24 border border-blue-700 rounded-full'>
          <img className='rounded-full' src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Food.jpg" alt="" />
          <p>Food</p>
        </div>
        <div className='h-24 w-24 border border-blue-700 rounded-full'>
          <img className='rounded-full' src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Merchandise.jpg" alt="" />
          <p>Merchandise</p>
        </div>
        <div className='h-24 w-24 border border-blue-700 rounded-full'>
          <img className='rounded-full' src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/CoffeeAtHome.jpg" alt="" />
          <p>Coffee At Home</p>
        </div>
        <div className='h-24 w-24 border border-blue-700 rounded-full'>
          <img className='rounded-full' src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/ReadyToEat.jpg" alt="" />
          <p>Ready to Eat</p>
        </div>
      </div>

      {/* carousel started  */}

      <div className='font-sans font-medium leading-7 text-start text-2xl'><h1>Handcrafted</h1></div>
      <div className='border border-red-800 flex space-x-10 justify-center '>

        <div className='h-[200px] w-[350px] border border-black bg-white '>
          <div className='flex'>
            <div className='h-[80px] w-[80px] border border-black justify-start mt-4 rounded-lg ml-4 '>
              {/* <img className='object-fill h-20 '  src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/100501.jpg" alt="" /> */}
            </div>
            <div className='p-5'>

              <div>
                <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                <div className='font-medium leading-7 text-start text-lg '> <span>cofeee and tea</span>  </div>

                <div> <span>all categee here</span>  </div>

              </div>
            </div>
          </div>

          <div className='flex border border-black justify-around' >
            <div>
              <h4>₹1414</h4>
            </div>
            <div>
              <button className='bg-green-500  text-white rounded-lg w-20'>Add Cart</button>
            </div>

          </div>


        </div>

        <div className='h-[200px] w-[350px] border border-black bg-white'>
          <div className='flex'>
            <div className='h-[80px] w-[80px] border border-black justify-start mt-4 rounded-lg ml-4 '>
              {/* <img className='object-fill h-20 '  src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/100501.jpg" alt="" /> */}
            </div>
            <div className='p-5'>

              <div>
                <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                <div className='font-medium leading-7 text-start text-lg '> <span>cofeee and tea</span>  </div>

                <div> <span>all categee here</span>  </div>

              </div>
            </div>
          </div>

          <div className='flex border border-black justify-around' >
            <div>
              <h4>₹1414</h4>
            </div>
            <div>
              <button className='bg-green-500  text-white rounded-lg w-20'>Add Cart</button>
            </div>

          </div>
        </div>

        <div className='h-[200px] w-[350px] border border-black bg-white'>
          <div className='flex'>
            <div className='h-[80px] w-[80px] border border-black justify-start mt-4 rounded-lg ml-4 '>
              {/* <img className='object-fill h-20 '  src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/100501.jpg" alt="" /> */}
            </div>
            <div className='p-5'>

              <div>
                <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                <div className='font-medium leading-7 text-start text-lg '> <span>cofeee and tea</span>  </div>

                <div> <span>all categee here</span>  </div>

              </div>
            </div>
          </div>

          <div className='flex border border-black justify-around' >
            <div>
              <h4>₹1414</h4>
            </div>
            <div>
              <button className='bg-green-500  text-white rounded-lg w-20'>Add Cart</button>
            </div>

          </div>

        </div>


      </div>
      {/* carousel code end  */}


      {/* *********************************************************************** */}
      <div className='p-12'>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img
              src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Group_1056_1_613d2cbaa1.png"
              alt="..."
            />
            <img
              src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Rectangle_696_2ad719a501.png"
              alt="..."
            />
            <img
              src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Rectangle_639_f5999462d2.png"
              alt="..."
            />
            <img
              src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Rectangle_696_2ad719a501.png"
              alt="..."
            />

          </Carousel>
        </div>
      </div>

      {/* **********************************************************************************  end*/}
      <div>

        <div>
          <h1>Learn more about the world of coffee!</h1>
        </div>

        <div className='flex'>
          <div className=" flex justify-between  border border-black p-10 gap-5">
            <Card imgSrc="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/113597.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
            <Card imgSrc="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/111874.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card><Card imgSrc="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/113590.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
      </div>
      {/* *************************************************************************************end  */}

      <div>
        <div className='p-10 bg-gray-300'>

          <div className='font-sans font-medium leading-7 text-start text-2xl mb-10'><h1>Learn more about the world of coffee!</h1></div>
          <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/pexels_denys_gromov_4765838_2_be7bc79560.jpg" alt="" />

        </div>
      </div>


      {/* *****************************************************************************************************end  */}
      {/* footer  */}


      <div className='mt-6'>
        <FooterP />
      </div>
    </div>
  )
}

export default Home
