import "./App.css";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Navbar from "./component/navbar/Navbar";
import Completed from "./component/todo/Completed";
import Select from "./component/todo/Select";
import Today from "./component/todo/Today";
import TodoWrapper from "./component/todo/TodoWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "./component/firebase/Firebase";
// import { onAuthStateChanged  } from "firebase/app";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const user = auth.currentUser;
  const [login, setLogin] = useState(false);
  console.log(login);
  useEffect(() => {
    console.log(user);
  }, [user]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);
  useEffect(() => {
    console.log(user);
    setTimeout(() => {
      console.log(user);
    }, 1000);
  }, [auth, user]);

  const AuthRoutes = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Login />,
    },
    {
      path: "/completed",
      element: <Login />,
    },
    {
      path: "/select",
      element: <Login />,
    },
    {
      path: "/today",
      element: <Login />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ];

  const CommanRoutes = [
    {
      path: "/home",
      element: <TodoWrapper />,
    },
    {
      path: "/completed",
      element: <Completed />,
    },
    {
      path: "/select",
      element: <Select />,
    },
    {
      path: "/today",
      element: <Today />,
    },
    {
      path: "/",
      element: <TodoWrapper />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];

  const finalRoutes = () => {
    if (!login) {
      return AuthRoutes;
    } else {
      return CommanRoutes;
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {finalRoutes().map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
