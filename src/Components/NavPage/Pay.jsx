import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import Navbars from '../Navbar/Navbars';
import FooterP from '../Footer/FooterP';

function Pay() {
  const [selectedOption, setSelectedOption] = useState('');
  const [barcode, setBarcode] = useState('');
  const [amountAdded, setAmountAdded] = useState(0); // Initialize with 0
  const [Amount, setAmount] = useState('');
  const [TextValue, setTextValue] = useState('');

  const handleChange = (event) => {
    setAmount(event.target.value);
    setTextValue(event.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === 'payAtStore') {
      const randomBarcode = Math.floor(Math.random() * 1000000000000).toString();
      setBarcode(randomBarcode);
    }
  };

  const handleAddAmount = (amount, event) => {
    event.preventDefault(); // Prevent form submission and page refresh
    const updatedAmount = parseFloat(Amount) + amount; // Calculate the updated amount
    setAmount(updatedAmount.toString()); // Update the input box value
    setTextValue(updatedAmount.toString()); // Update the text value for display
    setAmountAdded(updatedAmount); // Set the selected amount
  };


  const renderContent = () => {
    if (selectedOption === 'payAtStore') {
      return (
        <div>
          <h1>Scan the Barcode and Pay at the Store</h1>
          <div className='m-auto w-[200px] h-[200px] p-5'>
            {barcode && <QRCode value={barcode} />}
            <p className='p-2 mr-8'>{barcode}</p>
          </div>
        </div>
      );
    } else if (selectedOption === 'loadCard') {
      return (
        <div>
          <h1></h1>
          <div className='w-[100%] h-[50px] bg-[#F2F0EB] mt-4'>
            {/* button-box-started-from-hear  */}
            <div className='w-[400px] m-1 leading-[21px] text-[14px] font-medium flex gap-5 ml-14'>
              <button className='text-[#00754a]'> Manual Reload</button>
              <span className='mt-2'> | </span>
              <button> Transfer Balance</button>
            </div>
          </div>
          {/* button-box-end-from-hear  */}

          <form action='' className='mt-9'>
            <h3 className='mr-[960px]'>ENTER AMOUNT</h3>
            <input
              type='text'
              onChange={handleChange}
              value={Amount}
              placeholder='for e.g ₹500,₹1500,₹2000'
              className='w-[600px] border-t-0 border-r-0 border-l-0 mr-[500px]'
            />
            <div className='w-[500px] h-[50px] flex justify-around ml-[120px]'>
              <button onClick={(event) => handleAddAmount(500, event)}>+₹500</button>
              <button onClick={(event) => handleAddAmount(1000, event)}>+₹1000</button>
              <button onClick={(event) => handleAddAmount(1500, event)}>+₹1500</button>
              <button onClick={(event) => handleAddAmount(2000, event)}>+₹2000</button>

            </div>

            {/* input and add amount section box code ended */}
            {/* started Add amount box and payment box */}
            {/* first-box-in-this-amout-added-will-show  */}
            <div className='h-[43px] w-[100%] bg-[#00754A] rounded-t-lg text-[white] flex justify-around'>
              <h3 className='m-2'>Reload Card With</h3>
              <h4 className='m-2'>
                ₹{TextValue ? TextValue : (amountAdded !== 0 ? amountAdded.toFixed(2) : '0.00')}
              </h4>
            </div>

            {/* second-box-in-this-i-clicked-reload-button  */}
            {amountAdded > 0 && ( // Show the payment box only if an amount is added
              <div className='h-[60px] w-[100%] bg-[#006241] flex justify-around text-white'>
                <span>
                  <h3>Pay With</h3>
                  <h4>OTHER PAYMENT METHODS </h4>
                </span>
                <span>
                  <button className='h-[30px] w-28 border border-black rounded-3xl m-4'>Reload</button>
                </span>
              </div>
            )}
            {/* second-box-code-end */}
          </form>
        </div>
      );
    } else if (selectedOption === 'pastTransaction') {
      return (
        <div>
          <img className='m-auto' src='https://www.starbucks.in/assets/images/notransactions.svg' alt='empty-image' />
          <h1>
            No transaction found <span className='text-red-600'>!</span>
          </h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Welcome Welcome Welcome</h1>
        </div>
      );
    }
  };

  return (
    <div>
      <Navbars />
      <div className='h-fit w-[100%] mt-5'>
        <div className='h-[50px] w-[80%] justify-between bg-[#B2D396] flex gap-5 m-auto'>
          <button className='text-[16px] leading-[19px] text-[#1e3932] font-medium'>My Starbucks Cards</button>
          <div className='gap-3 flex text-center'>
            <button className='font-medium text-[13px] leading-[15px] text-[#00754a]'>My Starbucks Cards</button>
            <button className='bg-green-700 text-white rounded-lg text-xs px-8 h-10 mt-1 text-[12px] leading-[28px] font-normal'>
              Add Card
            </button>
          </div>
        </div>
        <div className='h-[350px] w-[100%] bg-[#1E3932]'>
          <div className='flex m-auto gap-8 h-[250px] w-[800px] p-5 cursor-pointer'>
            {/* First Box */}
            <div className='h-[300px] w-[325px] bg-slate-100'>
              <img
                src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/c08a5364_1d63_4d53_8bba_6b95bd1b05fe_6_90ea914d7c.png'
                alt='fist-img'
              />
              <div className='flex gap-[210px] mt-[20px] cursor-pointer'>
                <span className='left-0'>
                  <h2 className='leading-4 text-[14px] font-medium text-[#006241]'>Aroma</h2>
                  <p>*5867</p>
                </span>
                <span className='mt-[7px] text-[24px] leading-[29px] font-medium text-[#006241]'>
                  <h1>₹0.00</h1>
                </span>
              </div>
              <div className='h-5 flex gap-2 cursor-pointer mt-3'>
                <h5 className='text-[10px] leading-[12px] font-medium text-[#BDBDBD]'>Updated at 02.650 15/06/23</h5>
                <span className='flex gap-2'>
                  <img src='https://www.starbucks.in/assets/icon/Maskrefresh.svg' alt='refresh-icon' />
                  <img src='https://www.starbucks.in/assets/icon/Masksetting.svg' alt='Setting-icon' />
                </span>
              </div>
            </div>

            {/* Second Box */}
            <div className='h-[300px] w-[325px] border border-white bg-slate-100 relative cursor-pointer'>
              <img src='https://www.starbucks.in/assets/images/bg_pattern.svg' alt='second-img-with-background' />
              <div className='absolute inset-0 flex flex-col justify-center items-center'>
                <h1 style={{ whiteSpace: 'nowrap' }} className='text-black'>
                  Add New Starbucks Card
                </h1>
                <span className='flex justify-center items-center bg-black w-[110px] rounded-md'>
                  <img src='https://www.starbucks.in/assets/icon/add_circle_darkened_green.svg' alt='add-card-icon' />
                  <button className='text-white ml-2'>Add Card</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='h-fit w-[100%] border border-red-700 rounded-tr-3xl rounded-tl-3xl mt-[-16px] bg-white'>
          <div className='h-[45px] w-[50%] border border-black m-auto mt-4 rounded-l-3xl rounded-r-3xl '>
            <div className='h-[45px] w-[98%] m-auto flex justify-between mt-0.5 '>
              <button
                className='h-[37px] w-[160px] bg-[#00754A] rounded-l-3xl rounded-r-3xl text-white'
                onClick={() => handleOptionClick('payAtStore')}
              >
                Pay at Store
              </button>
              <button
                className='h-[37px] w-[160px] bg-[#00754A] rounded-l-3xl rounded-r-3xl text-white'
                onClick={() => handleOptionClick('loadCard')}
              >
                Load Card
              </button>
              <button
                className='h-[37px] w-[160px] bg-[#00754A] rounded-l-3xl rounded-r-3xl text-white'
                onClick={() => handleOptionClick('pastTransaction')}
              >
                Past Transaction
              </button>
            </div>
          </div>
          {renderContent()}
        </div>
      </div>
      <div className='mt-5'>
        <FooterP />
      </div>
    </div>
  );
}

export default Pay;
