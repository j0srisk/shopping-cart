import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
	return (
		<Link
			to={`/shop/products/${product.id}`}
			className="group flex h-full w-full flex-col rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300"
		>
			<div className="flex flex-1 flex-col items-center justify-center">
				<img
					src={product.image}
					alt="product"
					className="object-scale-down p-12 transition-all duration-300 ease-in-out group-hover:scale-110"
				/>
			</div>
			<div className="flex flex-col items-start p-4">
				<p className="text-sm capitalize text-gray-500">{product.category}</p>
				<p className="font-base"> ${product.price.toFixed(2)}</p>
			</div>
		</Link>
	);
};

export default ProductCard;
