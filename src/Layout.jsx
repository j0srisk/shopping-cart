import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<div className="flex flex-1 justify-center">{children}</div>
		</div>
	);
};

export default Layout;
