import { useContext } from "react";
import { ShopContext } from "../App";

const Cart = () => {
	const { cartItems } = useContext(ShopContext);

	return (
		<div className="flex w-full justify-center px-4 py-6">
			<div className="flex w-full max-w-screen-lg flex-col gap-6">
				<h1 className="text-4xl font-bold">Shop Items</h1>
				<ul className="flex w-full flex-col gap-6 divide-y divide-gray-200 ">
					{cartItems.map((item, index) => (
						<li key={index} className="flex flex-1 gap-6 pt-6">
							<div className="flex h-28 w-28 justify-center rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300">
								<img src={item.product.image} alt="product" className="object-scale-down p-6" />
							</div>
							<div className="flex flex-1 flex-col py-2">
								<div className="flex flex-1 flex-col items-start">
									<h1 className="text-xl font-bold">{item.product.title}</h1>
									<p className="text-sm capitalize text-gray-500">{item.product.category}</p>
								</div>
								<div className="flex items-start">
									<p className="text-sm font-bold"> Qty: {item.quantity}</p>
								</div>
							</div>
							<div className="flex flex-col justify-between py-2">
								<p className="text-xl font-bold">
									{" "}
									${(item.product.price * item.quantity).toFixed(2)}
								</p>
								<button className="text-sm text-gray-800 transition-all duration-300 ease-in-out hover:underline">
									Remove
								</button>
							</div>
						</li>
					))}
				</ul>
				<div className="flex items-end justify-end gap-1 py-6">
					<p className="text-2xl font-bold">Subtotal: </p>
					<p className="text-3xl font-bold">
						$
						{cartItems
							.reduce((total, item) => total + item.product.price * item.quantity, 0)
							.toFixed(2)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Cart;
