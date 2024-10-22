import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homepage/homePage";
import SinglePage from "./routes/singlepage/singlePage";
import Contact from "./routes/contact/Contact";
import Register from "./routes/register/Register";
import Login from "./routes/login/Login";
import AdminPage from "./routes/adminpage/AdminPage";
import { Layout, RequireAuth } from "./routes/layout/Layout";
import GoogleAnalytics from "react-ga4";

const trackingId = "G-4Q1YWR9BCK";
GoogleAnalytics.initialize(trackingId);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <SinglePage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <RequireAuth />,
    children: [
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
