import React from "react";
import "./App.css";
import Package from "./Component/Package/Package";
import Gallery from "./Component/Gallery/Gallery";
import Topbar from "./Component/Topbar/Topbar";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Minibar from "./Component/Minibar/Minibar";
import background from "../public/image/background.jpg";

function App() {
	return (
		<div className="App" style={{
            background: 'url('+background+')',
            backgroundRepeat: 'no-repeat'
        }}>
			<Topbar />
			<Navbar />
			<Minibar />
			<Package />
			<Gallery />
			<Footer />
		</div>
	);
}

export default App;
