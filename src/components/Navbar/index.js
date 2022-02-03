import React from "react";
import avatar from "../../images/avatar.jpg";

function Navbar() {
  return (
    <div className="border-b border-slate-300 h-24 md:h-32 text-slate-600 text-sm md:text-xl font-bold">
      <ul className="uppercase flex justify-end items-end mt-10">
        <li className="cursor-pointer">trips</li>

        <li className="mx-10 md:mx-16 cursor-pointer">recently viewed</li>

        <li className="mr-10 md:mr-16 cursor-pointer">bookings</li>

        <li className="cursor-pointer profile_picture h-11 w-11 bg-red-700 rounded-full relative md:left-4">
          <img
            src={avatar}
            alt="avatar"
            className="h-full w-full rounded-full object-cover"
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
