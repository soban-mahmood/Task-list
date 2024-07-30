import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import { auth, db } from "../firebase/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
function Register() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const user = auth.currentUser;
  console.log(user);

  const [registerData, setRegisterData] = React.useState(initialState);
  console.log(auth);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !registerData.email.includes("@") ||
      !registerData.email.includes(".")
    ) {
      toast.error("Invalid email address!");
      return;
    }
    try {
      createUserWithEmailAndPassword(
        auth,
        registerData.email,
        registerData.password
      );
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          password: registerData.password,
          name: registerData.name,
        });
      }
      console.log(user);
      console.log("user created");
      toast.success("User Created Successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Error Creating User!");
    }
    setRegisterData(initialState);
  };

  return (
    <div className="w-[100%] items-center h-screen mt-[70px] text-black">
      <div className="w-full shadow-lg p-10 rounded-lg">
        <form
          action=""
          className="flex flex-col gap-6 items-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl text-black">Register:</h1>
          <input
            placeholder="Enter your Name"
            type="text"
            value={registerData.name}
            onChange={handleInputChange}
            name="name"
            className="bg-[#3838d4] rounded py-2 px-2 w-1/2 outline-none text-white"
          />
          <input
            placeholder="Enter your Email"
            type="email"
            value={registerData.email}
            onChange={handleInputChange}
            name="email"
            className="bg-[#3838d4] rounded py-2 px-2 w-1/2 outline-none text-white"
          />
          <input
            placeholder="Enter your Password"
            type="password"
            value={registerData.password}
            onChange={handleInputChange}
            name="password"
            className="bg-[#3838d4] rounded py-2 px-2 w-1/2 outline-none text-white"
          />
          <input
            placeholder="Confirm Password"
            type="password"
            value={registerData.confirmPassword}
            onChange={handleInputChange}
            name="confirmPassword"
            className="bg-[#3838d4] rounded py-2 px-2 w-1/2 outline-none text-white"
          />
          <button
            type="submit"
            className="bg-[#3838d4] rounded py-2 px-10 outline-none text-white border"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
