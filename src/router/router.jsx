import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";



//   Components
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";
import Reset from "../components/Reset";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/reset',
      element: <Reset />
    }

  ])

  export default router