import React from "react";

// https://api.frankfurter.dev/v1/currencies //==============> api for currencies
//  https://api.frankfurter.dev/v1/latest?from=USD&to=INR

const CurrencyConverter = () => {
  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md ">
      <h2 className="mb-5 text-2xl  font-semibold text-gray-700">
        Currency Converter
      </h2>
      <div>Dropdowns</div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="amount"
        >
          Amount
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm ocus:outline-none focus:ring-indigo-500 "
          type="number"
        />
      </div>

      <div className="flex justify-end mt-6">
        <button className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Convert
        </button>
      </div>
      <div className="mt-4 text-lg font-medium text-right text-green-600 ">
         Converted number: 69 USD
      </div>
    </div>
  );
};

export default CurrencyConverter;
