import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="shop" element={<Shop />} />
					<Route path="shop/products/:productId" element={<Product />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
