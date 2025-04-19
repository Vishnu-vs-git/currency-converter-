import React from 'react'
import { CiStar } from "react-icons/ci";



type DropDownProps = {
  currencies: string[];
  currency: string;
  favourites?: string[]; // Optional, if you're planning to use it later
  setCurrency: (currency: string) => void;
  handlefavourite: (currency: string) => void;
  title?: string;
};

const DropDown:React.FC<DropDownProps> =({
currencies,
currency,
favourites,
setCurrency,
handlefavourite,
title = ""
}


) => {
  return (
    <div >
      <label className="block text-sm font-medium text-gray-700"    htmlFor={title}>{title}</label>
      <div className="mt-1 relative"     ><select value={currency} onChange={(e)=>setCurrency(e.target.value)} className='w-full p-2 border border-gray-300 rounded-md shadow-sm
      docus:outline-none focus:ring-2 focus:ring-indigo-500'>
           {/* render favorites */}
        {currencies?.map((currency)=>{
         return <option value={currency} key={currency}>
            {currency}
          </option>
        })}
        </select>
        
        <button onClick={()=>handlefavourite(currency)} className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-6 "><CiStar/> </button>
        </div>

    </div>
  )
}

export default DropDown 