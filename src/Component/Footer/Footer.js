import React from "react";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaSpotify, FaInstagram } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
	return (
		<div className="footer mt-5 pb-5">
			<div className="blue-box flex-column flex-lg-row d-flex container justify-content-between align-items-center p-5">
				<div className="left-box">
					<div className="logo-title pb-2">André Rieu</div>
					<div className="d-flex align-items-center">
						<span className="copy-right">
							Copyright © 1999 - 2022 André Rieu Productions BV - All Rights
							Reserved
						</span>
						<span className="line mx-3">|</span>
						<span className="tos">Terms of Use and privacy statement</span>
					</div>
				</div>
				<div className="right-part py-3 py-lg-0 d-flex align-items-center">
					<div className="icon-white mx-3">
						<AiFillYoutube />
					</div>
					<div className="icon-white mx-3">
						<FaFacebookF />
					</div>
					<div className="icon-white mx-3">
						<AiOutlineTwitter />
					</div>
					<div className="icon-white mx-3">
						<FaSpotify />
					</div>
					<div className="icon-white mx-3">
						<FaInstagram />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
