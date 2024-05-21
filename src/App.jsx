import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/info";
import MainPage from "./pages/mainPage";
import Layout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductsDetail from "./pages/ProductsDetail";
import ProjectPage from "./pages/projects";
import Entry from "./pages/entry";
import Info from "./pages/info";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { path: "/", element: <Entry /> },
      { path: "/home", element: <MainPage /> },
      { path: "/projects", element: <ProjectPage /> },
      { path: "/products/:pid", element: <ProductsDetail /> },
      { path: "/info", element: <Info /> },
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
