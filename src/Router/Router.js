import {  createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import LandingPage from "../Dashboard/LandingPage";
import Dashboard from "../Dashboard/Dashboard";
const router = createBrowserRouter([
    {
      path: "/", 
      element: <LandingPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Dashboard /> }
    ]
}
]);

export default router;
