import React from "react";
import CardDetail from "./CardDetail";
import CardInputField from "./CardInputField";

function PaymentInfo() {
  return (
    <div className="flex flex-col md:flex-row pt-8 border-b border-slate-300 pb-5">
      <CardDetail />
      <CardInputField />
    </div>
  );
}

export default PaymentInfo;
