import React from 'react'
import CurrencyConverter from './components/Currency-Converter'
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center '>
       
        
        <div className="container">

         <CurrencyConverter/>
        </div>

        <ToastContainer />

    </div>
  )
}

export default App