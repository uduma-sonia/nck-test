import React from "react";
import CardDetail from "./CardDetail";
import CardInputField from "./CardInputField";

function PaymentInfo() {
  return (
    <div className="flex pt-8">
      <CardDetail />
      <CardInputField />
    </div>
  );
}

export default PaymentInfo;
