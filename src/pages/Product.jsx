import { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ShopContext } from "../App";

const Product = () => {
	const [quantity, setQuantity] = useState(1);
	const { products, addToCart } = useContext(ShopContext);
	const productID = useParams().productId;
	const product = products.find((product) => product.id === parseInt(productID));

	return (
		<div className="flex flex-1 justify-center px-4 py-6">
			<div className="flex max-w-screen-lg flex-col gap-6">
				<Link
					to="/shop"
					className="text-gray-800 transition-all duration-300 ease-in-out hover:underline"
				>
					{" "}
					&larr; Back to Shop
				</Link>
				<div className="flex h-full gap-6">
					<div className="flex w-full flex-1 flex-col justify-center rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300">
						<img src={product.image} alt="product" className="object-scale-down p-12 " />
					</div>
					<div className="flex flex-1 flex-col gap-6">
						<div>
							<h1 className="text-4xl font-bold">{product.title}</h1>
							<p className="text-sm capitalize text-gray-500">{product.category}</p>
						</div>
						<p className="text-2xl font-bold"> ${product.price.toFixed(2)}</p>
						<p className="text-sm">{product.description}</p>

						<div className="flex items-center gap-4">
							<button
								className="rounded-md bg-gray-800 px-4 py-2 text-white shadow-sm hover:bg-gray-700"
								onClick={() => setQuantity(quantity - 1)}
								disabled={quantity === 1}
							>
								-
							</button>
							<p className="text-xl">{quantity}</p>
							<button
								className="rounded-md bg-gray-800 px-4 py-2 text-white shadow-sm hover:bg-gray-700"
								onClick={() => setQuantity(quantity + 1)}
							>
								+
							</button>
						</div>

						<button
							onClick={() => addToCart(product, quantity)}
							className="mt-4 rounded-md bg-gray-800 px-4 py-2 text-white shadow-sm hover:bg-gray-700"
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
