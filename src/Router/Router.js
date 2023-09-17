import {  createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import LandingPage from "../Dashboard/LandingPage";
import Dashboard from "../Dashboard/Dashboard";
import Aboutus from "../Aboutus/Aboutus";
const router = createBrowserRouter([
    {
      path: "/", 
      element: <LandingPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "aboutus", element: <Aboutus /> }
    ]
}
]);

export default router;
