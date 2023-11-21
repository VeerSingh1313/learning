import "./App.css";
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Layout2 from "./component/Layout2";
import Login from "./component/login";
import Afterlogin from '../src/component/Mainlayout'
import Cookies from "js-cookie";


// const token = localStorage.getItem("token");
const token = Cookies.get('token');

const router = createBrowserRouter([
  token
    ? {
      path: "/",
      element: <Afterlogin />,
      children: [{ path: "/", element: <Home /> }],
    }
    : {
      path: "/",
      element: <Layout2 />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
      ],
    },
]);
function App() {
  return (
    <RouterProvider router={router} />
    //   <BrowserRouter>
    //   <Routes>
    //   <Route path="/"element={<Login/>}/>
    //   <Route path="/home" element={<Afterlogin/>}/>
    // </Routes>

    // </BrowserRouter>

  )
}

export default App;

