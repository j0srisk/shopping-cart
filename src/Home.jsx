import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1 className="font-bold">Home</h1>
			<p>Home page content</p>
			<Link to="/shop">Shop</Link>
		</div>
	);
};

export default Home;
