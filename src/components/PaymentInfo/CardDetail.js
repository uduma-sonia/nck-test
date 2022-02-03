import React from "react";
import card from "../../images/credit-card.png";

function CardDetail() {
  return (
    <div className="w-full md:w-1/2 md:pr-44">
      <h3 className="font-bold text-xl text-slate-800 mb-2">
        Payment Information
      </h3>

      <p className="text-xs text-slate-900 opacity-70 font-semibold mb-6">
        Choose your method of payment.
      </p>

      <div>
        <img src={card} alt="card" />
      </div>
    </div>
  );
}

export default CardDetail;
