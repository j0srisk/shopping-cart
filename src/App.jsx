import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const App = () => {
	const [shoppingCart, setShoppingCart] = useState([]);

	function addToCart(product, quantity) {
		console.log("Adding to cart:", product, quantity);
		// just updates quantity if product is already in cart
		const index = shoppingCart.findIndex((item) => item.product.id === product.id);
		if (index !== -1) {
			const newShoppingCart = [...shoppingCart];
			newShoppingCart[index].quantity += quantity;
			setShoppingCart(newShoppingCart);
			return;
		}
		// otherwise, add new item to cart
		setShoppingCart([...shoppingCart, { product, quantity }]);
	}

	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="shop" element={<Shop />} />
					<Route path="shop/products/:productId" element={<Product addToCart={addToCart} />} />
					<Route
						path="cart"
						element={<Cart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />}
					/>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
