import { useState } from 'react'
import {InputBox} from './components/Index'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)
  
  const options = Object.keys(currencyInfo)
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  
  return (
    <div 
      className="w-fullscreen h-screen  flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{backgroundImage: `url('https://www.solai.co.uk/wp-content/uploads/2016/12/iStock-534117328-v3.jpg')`}}
      >
        <div className="w-full">
            <div className='w-full max-w-md p-5 float-end mx-5 border border-gray-60 rounded-lg backdrop-blur-sm bg-white/30 '>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  convert()
                }}
                >
                  <div className='w-full mb-1'>
                    <InputBox 
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setFrom(currency)}
                    selectCurrency={from}
                    onAmountChange={(amount) => setAmount(amount)}
                    />
                  </div>
                  <div className='relative w-full h-0.5'>
                    <button
                      type="button"
                      className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-700 text-white px-2 py-0.5'
                      onClick={swap}
                    >Swap</button>
                  </div>
                  <div className='w-full mt-1 mb-4'>
                    <InputBox 
                    label="To"
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    amoutDisable
                    />
                  </div>
                  <button 
                    type='submit'
                    className='w-full bg-green-700 text-white px-4 py-3 rounded-lg'
                  > 
                    Convert {from.toUpperCase()} to {to.toUpperCase()}

                  </button>
              </form>
            </div>
          </div>
      </div>

  );
}
export default App
