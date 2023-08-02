import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="shop" element={<Shop />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
