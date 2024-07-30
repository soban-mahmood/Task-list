import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

function Login() {
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    setLoginState(!true);
  }, []);

  const initialState = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState(initialState);

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, login.email, login.password);
      console.log("user sign-in successful");
      toast.success("user sign-in successful");
    } catch (error) {
      console.log(error);
      toast.error("invalid user");
    }
    setLogin(initialState);
  };

  if (loginState) {
    return <Navigate to="/home" />;
  } else {
    return (
      <div className="w-[100%] items-center h-screen mt-[70px] text-black ">
        <div className="w-full shadow-lg p-10 rounded-lg">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 items-center  "
          >
            <h1 className="text-3xl text-black ">Login :</h1>
            <input
              placeholder="Enter your Email"
              onChange={handleLogin}
              type="text"
              value={login.email}
              name="email"
              className="bg-[#3838d4] rounded py-2 px-2 w-1/2 outline-none text-white "
            />
            <input
              placeholder="Enter your Password"
              onChange={handleLogin}
              type="password"
              name="password"
              value={login.password}
              className="bg-[#3838d4] rounded py-2 px-2 w-1/2 outline-none text-white "
            />
            <button
              type="submit"
              className="bg-[#3838d4] rounded py-2 px-10 outline-none text-white "
            >
              lOGIN
            </button>
          
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
