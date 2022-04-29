import React from "react";
import "./Minibar.css";
const Minibar = () => {
	return (
		<div className="minibar d-none d-lg-block">
			<div className="container pt-5">
				<div className="width-part py-3">
					<span className="px-4 arrow py-3">You are here:</span>
					<span className="px-4 home py-3">Home</span>
					<span className="px-4 home py-3">Travel</span>
				</div>
			</div>
		</div>
	);
};

export default Minibar;
