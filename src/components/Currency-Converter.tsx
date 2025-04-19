import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DropDown from "./DropDown ";
import { HiArrowsRightLeft } from "react-icons/hi2";

// https://api.frankfurter.dev/v1/currencies //==============> api for currencies
//  https://api.frankfurter.dev/v1/latest?from=USD&to=INR

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [amount, setAmount] = useState<number>(1);

  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("INR");
  const [convertedAmount,setConvertedAmounted]=useState<string|null>(null);
  const[converting,setConverting]=useState<boolean>(false)

  const fetchCurrency = async () => {
    try {
      const res = await fetch("https://api.frankfurter.dev/v1/currencies");
      const data = await res.json();
    

      setCurrencies(Object.keys(data));
    } catch (error: any) {
      toast.error(`Error: ${error.message || "Something went wrong!"}`, {
        className: "bg-red-600 text-white font-semibold rounded-lg shadow-md",
      });
      console.error("Error Fetching ");
    }
  };

  useEffect(() => {
    fetchCurrency();
  }, []);
  console.log(currencies);











  const currencyConverter = async ():Promise<void> => {
     if(!amount)return
     setConverting(true);
    try {
      const res = await fetch(`https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      const data = await res.json();
      setConvertedAmounted(data.rates[toCurrency]+ " "+toCurrency)
      toast.success("Converted!", {
        className:
          "bg-indigo-600 text-white text-md font-medium rounded-lg px-4 py-3 shadow-md",
        progressClassName: "bg-green-400",
      })

  }catch (error: any) {
    toast.error(`Error: ${error.message || "Something went wrong!"}`, {
      className: "bg-red-600 text-white font-semibold rounded-lg shadow-md",
    });
    console.error("Error Fetching ");

}finally{
  setConverting(false)
}
  }
  const handlefavourite = (currency:string) => {};

 const swapCurrencies = () =>{
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency)
 }


  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md ">
      <h2 className="mb-5 text-2xl  font-semibold text-gray-700">
        Currency Converter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end" >
        <DropDown
          currencies={currencies}
          title="From"
          setCurrency={setFromCurrency}
          currency={fromCurrency}
          handlefavourite={handlefavourite}
        />
        {/* Swap currency Button */}
           <div className="flex justify-center  -mb-5 sm:mb-0" >
               <button onClick={swapCurrencies}     className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
                <HiArrowsRightLeft className="text-xl text-gray-700" />
               </button>
           </div>

        <DropDown
          currencies={currencies}
          title="To"
          setCurrency={setToCurrency}
          currency={toCurrency}
          handlefavourite={handlefavourite}
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="amount"
        >
          Amount:
        </label>
        <input
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm ocus:outline-none focus:ring-indigo-500 "
          type="number"
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={currencyConverter}
          className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
            ${converting?"animate-pulse":""}
            
            `}
        >
          Convert
        </button>
      </div>
      {convertedAmount &&(
      <div className="mt-4 text-lg font-medium text-right text-green-600 ">
        Converted number: {convertedAmount}
      </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
