import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const [color, setColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 110) {
			setColor(true);
		} else {
			setColor(false);
		}
	};
	window.addEventListener("scroll", changeColor);

	return (
		<>
			<nav
				className={
					color
						? "navbar navbar-expand-lg py-3 py-lg-0 sticky-top scroll box-shadow "
						: "navbar navbar-expand-lg py-3 py-lg-0 sticky-top withoutScroll "
				}
			>
				<div className="container py-3 py-lg-0">
					<button
						className="navbar-toggler collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="toggler-icon top-bar"></span>
						<span className="toggler-icon middle-bar"></span>
						<span className="toggler-icon bottom-bar"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-lg-0 py-3 mb-3">
							<li className="nav-item mx-2 mb-lg-0 mb-3 mt-lg-0 mt-3">
								<a className="nav-link" href="#home">
									Home
								</a>
							</li>
							<li className="nav-item mx-2 mb-lg-0 mb-3">
								<a className="nav-link" href="#tour">
									TOUR
								</a>
							</li>
							<li className="nav-item mx-2 mb-lg-0 mb-3">
								<a className="nav-link" href="#about">
									ABOUT ANDRÉ
								</a>
							</li>
							<li className="nav-item mx-2 mb-lg-0 mb-3">
								<a className="nav-link" href="#shop">
									WEBSHOP
								</a>
							</li>
							<li className="nav-item mx-2 mb-lg-0 mb-3">
								<a className="nav-link" href="#media">
									MEDIA
								</a>
							</li>
							<li className="nav-item mx-2 mb-lg-0 mb-3">
								<a className="nav-link" href="#cinema">
									CINEMA
								</a>
							</li>
							<li className="nav-item mx-2 mb-lg-0 mb-3">
								<a className="nav-link" href="#news">
									NEWS
								</a>
							</li>
						</ul>
						<div className={color ? "d-none" : "right"}>
							<div class="select" tabindex="1">
								<input
									class="selectopt"
									name="test"
									type="radio"
									id="opt1"
									checked
								/>
								<label for="opt1" class="option px-5">
									English
								</label>
								<input class="selectopt" name="test" type="radio" id="opt2" />
								<label for="opt2" class="option ps-5">
									Nederlands
								</label>
								<input class="selectopt" name="test" type="radio" id="opt3" />
								<label for="opt3" class="option px-5">
									Deutsch
								</label>
								<input class="selectopt" name="test" type="radio" id="opt4" />
								<label for="opt4" class="option px-5">
									Français
								</label>
								<input class="selectopt" name="test" type="radio" id="opt5" />
								<label for="opt5" class="option px-5">
									Español
								</label>
							</div>
						</div>
					</div>
				</div>
			</nav>

			{/* <div className={click ? "left-nav sticky-top p-5" : "d-none"}>
				<div className="d-flex">
					<ul>
						<li className="nav-item mx-2 mb-lg-0 mb-3 mt-lg-0 mt-3">
							<a className="nav-link" href="#home">
								Home
							</a>
						</li>
						<li className="nav-item mx-2 mb-lg-0 mb-3">
							<a className="nav-link" href="#tour">
								TOUR
							</a>
						</li>
						<li className="nav-item mx-2 mb-lg-0 mb-3">
							<a className="nav-link" href="#about">
								ABOUT ANDRÉ
							</a>
						</li>
						<li className="nav-item mx-2 mb-lg-0 mb-3">
							<a className="nav-link" href="#shop">
								WEBSHOP
							</a>
						</li>
						<li className="nav-item mx-2 mb-lg-0 mb-3">
							<a className="nav-link" href="#media">
								MEDIA
							</a>
						</li>
						<li className="nav-item mx-2 mb-lg-0 mb-3">
							<a className="nav-link" href="#cinema">
								CINEMA
							</a>
						</li>
						<li className="nav-item mx-2 mb-lg-0 mb-3">
							<a className="nav-link" href="#news">
								NEWS
							</a>
						</li>
					</ul>
					<ImCross className="icon-cross" onClick={() => setClick(!click)} />
				</div>
			</div> */}
		</>
	);
};

export default Navbar;