import React from "react";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaSpotify, FaInstagram } from "react-icons/fa";
import logo from "../../../public/image/andre-rieu.PNG";
import "./Topbar.css";
const Topbar = () => {
	return (
		<div className="topbar d-lg-block d-none">
			<div className="container py-5">
				<div className="d-flex justify-content-between align-items-center">
					<img src={logo} alt="" className="img-fluid-title" />

					<div className="right-part d-flex align-items-center">
						<div className="icon mx-3">
							<AiFillYoutube />
						</div>
						<div className="icon mx-3">
							<FaFacebookF />
						</div>
						<div className="icon mx-3">
							<AiOutlineTwitter />
						</div>
						<div className="icon mx-3">
							<FaSpotify />
						</div>
						<div className="icon mx-3">
							<FaInstagram />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
