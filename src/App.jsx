import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Layout from "./Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

export const ShopContext = createContext({
	products: [],
	cartItems: [],
	addToCart: () => {},
});

const App = () => {
	const [cartItems, setCartItems] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		// Fetch data from the API
		axios
			.get("https://fakestoreapi.com/products")
			.then((response) => {
				console.log(response);
				setProducts(response.data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				alert("Error fetching data", error);
			});
	}, []);

	function addToCart(product, quantity) {
		console.log("Adding to cart:", product, quantity);
		// just updates quantity if product is already in cart
		const index = cartItems.findIndex((item) => item.product.id === product.id);
		if (index !== -1) {
			const newCartItems = [...cartItems];
			newCartItems[index].quantity += quantity;
			setCartItems(newCartItems);
			return;
		}
		// otherwise, add new item to cart
		setCartItems([...cartItems, { product, quantity }]);
	}

	return (
		<ShopContext.Provider value={{ products, cartItems, addToCart }}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="shop" element={<Shop />} />
						<Route path="shop/products/:productId" element={<Product />} />
						<Route path="cart" element={<Cart />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</ShopContext.Provider>
	);
};

export default App;
