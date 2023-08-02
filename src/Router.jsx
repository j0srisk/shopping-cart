import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Error from "./Error";

const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			errorElement: <Error />,
		},
		{
			path: "shop",
			element: <Shop />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
