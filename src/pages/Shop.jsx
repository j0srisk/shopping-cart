import { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "../components/ProductCard";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Fetch data from the API
		axios
			.get("https://fakestoreapi.com/products")
			.then((response) => {
				console.log(response);
				setProducts(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				alert("Error fetching data", error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<div className="flex justify-center px-4 py-6">
			<div className="flex max-w-screen-lg flex-col gap-6">
				<h1 className="text-4xl font-bold">Shop Items</h1>
				<div className="flex w-full flex-wrap gap-6 ">
					{products.map((product) => (
						<div key={product.id} className="flex flex-1 basis-1/5 gap-8">
							<ProductCard product={product} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Shop;
