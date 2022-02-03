import React from "react";
import visa from "../../images/visa.png";
import paypal from "../../images/paypal.png";
import discover from "../../images/discover.png";

function CardInputField() {
  return (
    <div className="w-1/2">
      <div className="flex justify-end">
        <div className="mr-7">
          <img src={visa} alt="visa-logo" />
        </div>

        <div>
          <img src={paypal} alt="paypal-logo" />
        </div>
      </div>

      <div className="mt-10 flex">
        <div className="w-1/2 pr-3">
          <div className="mb-8">
            <label className="font-semibold text-sm text-slate-800">
              Credit card number
            </label>
            <input
              className="tracking-wider mt-2 border border-gray-300 rounded bg-gray-200 w-full text-slate-800 font-medium text-sm py-3 pl-4 pr-2"
              placeholder="4324 5433 9382 1030"
            />
          </div>
          <div>
            <label className="font-semibold text-sm text-slate-800">
              Security code
            </label>
            <input
              className="tracking-wider mt-2 border border-gray-300 rounded bg-gray-200 w-full text-slate-800 font-medium text-sm py-3 pl-4 pr-2"
              placeholder="420"
            />
          </div>
        </div>

        <div className="w-1/2 pl-3">
          <div className="mb-8">
            <label className="font-semibold text-sm text-slate-800">
              Expiration date
            </label>
            <input
              className="tracking-wider mt-2 border border-gray-300 rounded bg-gray-200 w-full text-slate-800 font-medium text-sm py-3 pl-4 pr-2"
              placeholder="03/24"
            />
          </div>
          <div>
            <label className="font-semibold text-sm text-slate-800">
              Postal code
            </label>
            <input
              className="tracking-wider mt-2 border border-gray-300 rounded bg-gray-200 w-full text-slate-800 font-medium text-sm py-3 pl-4 pr-2"
              placeholder="10119"
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <input type="radio" className="mr-3" />
        <label className="font-semibold text-sm text-slate-800">
          Use this card for next time purchase
        </label>
      </div>

      <div className="mt-5">
        <button className="rounded bg-[#0474b3] hover:bg-sky-700 text-white w-full h-14">
          Add card
        </button>
      </div>
    </div>
  );
}

export default CardInputField;
