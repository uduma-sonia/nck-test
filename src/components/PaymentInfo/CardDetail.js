import React from "react";
import card from "../../images/credit-card.png";

function CardDetail() {
  return (
    <div className="w-1/2 pr-44">
      <h3 className="font-bold text-xl text-slate-800 mb-2">
        Payment Information
      </h3>

      <p className="text-xs text-slate-900 opacity-70 font-semibold mb-8">
        Choose your method of payment
      </p>

      <div>
        <img src={card} alt="card" />
      </div>

      {/* <div className="text-xs text-white rounded-md p-7 card-background">
        <p className="text-xxs font-medium tracking-widest">CARD NUMBER</p>

        <p className="font-bold my-2 tracking-widest">
          <span className="mr-1">4324</span>
          <span className="mr-1">5433</span>
          <span className="mr-1">9382</span>
          <span>1030</span>
        </p>

        <p>micro chip</p>

        <p>EXPIRATION DATE</p>

        <p>03/24</p>

        <p>John Doe</p>
      </div> */}
    </div>
  );
}

export default CardDetail;
