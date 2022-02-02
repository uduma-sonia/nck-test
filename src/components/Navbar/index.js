import React from "react";
import avatar from "../../images/avatar.jpg";

function Navbar() {
  return (
    <div className="border-b border-slate-300 h-32 text-slate-800 text-md font-bold">
      <ul className="uppercase flex justify-end items-end mt-10">
        <li>trips</li>

        <li className="mx-12">recently viewed</li>

        <li className="mr-12">bookings</li>

        <li className="profile_picture h-11 w-11 bg-red-700 rounded-full relative left-4">
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
