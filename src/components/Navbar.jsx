import { useContext } from "react";
import { Link } from "react-router-dom";

import { ShopContext } from "../App";

const Navbar = () => {
	const { cartItems } = useContext(ShopContext);
	const cartTotal = cartItems.reduce((total, item) => total + item.quantity, 0);

	return (
		<nav className="flex justify-center bg-gray-800 p-4 text-gray-400">
			<div className="flex max-w-screen-lg flex-1 items-center justify-between gap-8">
				<div className="flex">
					<Link to="/">
						<img src="/vite.svg" alt="logo" />
					</Link>
				</div>
				<div className="flex flex-1 justify-center gap-4 ">
					<Link
						to="/"
						className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-300 ease-in-out hover:bg-gray-700 hover:text-white"
					>
						Home
					</Link>
					<Link
						to="/shop"
						className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-300 ease-in-out hover:bg-gray-700 hover:text-white"
					>
						Shop
					</Link>
				</div>
				<Link
					to="/cart"
					className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-white"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6 "
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
						/>
					</svg>
					<p className="text-sm font-medium">{cartTotal}</p>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
