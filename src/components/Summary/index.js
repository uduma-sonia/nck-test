import React from "react";

function Summary() {
  return (
    <div className="mt-8 font-bold text-slate-900">
      <div className="border-b border-slate-300 pb-12">
        <div className="flex justify-between mb-5">
          <h5>Subtotal</h5>
          <p>&#8358;2,497.00</p>
        </div>

        <div className="flex justify-between mb-5">
          <h5>Estimated TAX</h5>
          <p>&#8358;119.64</p>
        </div>

        <div className="flex justify-between">
          <h5>
            Promotional Code: <span className="text-slate-300">Z4KXLM9A</span>
          </h5>
          <p>&#8358;-60.00</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col-reverse md:flex-row justify-between">
        <button className="bg-[#0474b3] hover:bg-sky-700 text-white font-semibold px-14 py-4 rounded-md text-lg">
          Complete payment
        </button>

        <p className="font-extrabold text-xl md:text-2xl">
          TOTAL:&#8358;2556.64
        </p>
      </div>
    </div>
  );
}

export default Summary;
