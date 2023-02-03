import { Footer } from 'flowbite-react'
import React from 'react'


function FooterP() {
  return (
    <div className='text-white'>
      <Footer >
          <div className='h-96 w-[100%]  border border-red-700 bg-green-600'>
           <div className='flex justify-around mt-7 font-medium cursor-pointer'>
            <div>
              <img src="https://www.starbucks.in/assets/icon/logo.png" alt="" />
            </div>
            <div className='flex gap-20 '>
              <div  className='space-y-4'> 
                <h2>About</h2>
                 <div  className='space-y-4 font-normal'>
                  <p>Our Heritage</p>
                  <p>Our Company</p>
                  <p>Coffeefouse</p>
                 </div>
              </div>
              <div className='space-y-4 '>
                <h2>Responsibilties</h2>
                <div  className='space-y-4 font-normal'>
                  <p>Community</p>
                  <p>Ethical Sourcing</p>
                  <p>Environment</p>
                  <p>Diversity</p>
                </div>
              </div>
              <div className='space-y-4'>
                <h2>Quick link</h2>
                <div  className='space-y-4 font-normal'>
                  <p>Careers</p>
                  <p>Season's Gifting</p>
                  <p>FAQs</p>
                  <p>Customer Service</p>
                  <p>Delivery</p>
                </div>
              </div>
              <div  className='space-y-4'>
                <h2>Sicial Media</h2>
                <div className='flex gap-5'>
                  <img src="https://www.starbucks.in/assets/icon/instagram.svg" alt="" />
                  <img src="https://www.starbucks.in/assets/icon/facebook.svg" alt="" />
                  <img src="https://www.starbucks.in/assets/icon/twitter.svg" alt="" />
                </div>
              </div>
              <div>
                <img src="https://www.starbucks.in/assets/images/appstoreiOS.png" alt="" />
                 <img src="https://www.starbucks.in/assets/images/appstoreAndroid.png" alt="" />
              </div>
              
            </div>
           </div>
          </div>

      </Footer>
    </div>
  )
}

export default FooterP
