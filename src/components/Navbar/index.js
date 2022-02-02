import React from "react";

function Navbar() {
  return (
    <div className="border-b border-slate-300 h-32 text-slate-800 text-md font-bold">
      <ul className="uppercase flex justify-end mt-10">
        <li>trips</li>

        <li className="mx-12">recently viewed</li>

        <li className="mr-12">bookings</li>

        <li className="profile_picture">picture</li>
      </ul>
    </div>
  );
}

export default Navbar;
