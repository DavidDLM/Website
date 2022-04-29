import React, { useEffect, useState } from "react";
import "./Package.css";

import Amsterdam from "../../../public/image/Amsterdam.jpg";
import Antwerp from "../../../public/image/Antwerp.jpg";
import Berlin from "../../../public/image/Berlin.jpg";
import Birmingham from "../../../public/image/Birmingham.jpg";
import Bratislava from "../../../public/image/Bratislava.jpg";
import Bremen from "../../../public/image/Bremen.jpg";
import Cologne from "../../../public/image/Cologne.jpg";
import Copenhagen from "../../../public/image/Copenhagen.jpg";
import Dortmund from "../../../public/image/Dortmund.jpg";
import Dublin from "../../../public/image/Dublin.jpg";
import Hamburg from "../../../public/image/Hamburg.jpg";
import Lisbon from "../../../public/image/Lisbon.jpg";
import London from "../../../public/image/London.jpg";
import Maastricht from "../../../public/image/Maastricht.jpg";
import Maastricht2 from "../../../public/image/Maastricht2.jpg";
import Munich from "../../../public/image/Munich.jpg";
import Oslo from "../../../public/image/Oslo.jpg";
import Prague from "../../../public/image/Prague.jpg";
import Salzburg from "../../../public/image/Salzburg.jpg";
import Vienna from "../../../public/image/Vienna.jpg";
import Zurich from "../../../public/image/Zurich.jpg";

const Package = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("../../../data.json")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);
	return (
		<div className="package">
			<div className="container py-5">
				<div className="top-package">
					<div className="top-package-title p-4">AVAILABLE TRAVEL PACKAGES</div>
					<div className="package-grid p-4">
						<div className="grid-box">
							{data.map((pack) => (
								<Item packCard={pack} key={pack.id} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Package;

const Item = ({ packCard }) => {
	const { image, place, year, color, details } = packCard;
	return (
		<div className="grid-item">
			<div className="image-box">
				<img src={image} className="img-fluid" alt="..." />
			</div>

			<div className="destination text-center p-3">
				<strong>{place} </strong>
				{year}
			</div>
			<div
				className="order text-center p-3"
				style={{
					backgroundColor: "{{ color }}",
					fontSize: "18px",
					fontWeight: "500",
					color: "white",
					cursor: "pointer",
				}}
			>
				{details}
			</div>
		</div>
	);
};
