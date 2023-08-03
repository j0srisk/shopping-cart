import { useContext } from "react";
import { ShopContext } from "../App";

import ProductCard from "../components/ProductCard";

const Shop = () => {
	const { products } = useContext(ShopContext);

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
