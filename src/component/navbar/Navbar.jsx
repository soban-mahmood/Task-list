import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/Firebase";

function Navbar() {

  async function handleLogOut() {
    try {
      await auth.signOut();
      console.log("user sign-out successful");
      toast.success("user sign-out successful");
    } catch (error) {
      console.log(error);
      toast.error("error while sign-out");
    }
  }
  return (
    <div>
      <nav className="px-5 py-3 flex justify-between gap-[100px] w-[full]  items-baseline bg-[#3838d4] text-white rounded  ">
        <div id="navbrand" className="">
          <Link to="/home" className="text-[3vh] font-bold mr-2 text-white">
     Task
          </Link>
          <span className="text-[#fff] text-[3vh]">List</span>
        </div>
        <div className="p-2">
          <Link to="/home" className="text-white mr-10">
            Home
          </Link>
          <Link to="/completed" className="text-white mr-10">
            Completed Task
          </Link>
          <Link to="/today" className="text-white mr-10">
            Today Task
          </Link>
          <Link to="/select" className="text-white mr-10">
            Select Date
          </Link>
         
          <Link to="/register" className="text-white">
      Register
          </Link>
          &nbsp;&nbsp;
          <button
              onClick={handleLogOut}
              className="bg-[#3838d4] rounded py-2 px-10 outline-none text-white "
            >
              LOGOUT
            </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
