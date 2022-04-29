import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./Gallery.css";
import Andre from "../../../public/image/AndreRieu.png";
const Gallery = () => {
	return (
		<div className="gallery">
			<div className="container py-5">
				<div className="top-gallery">
					<div className="top-gallery-title p-3">GALLERY</div>
					<div className="package-grid p-4">
						<div className="gallery-grid mx-auto text-center">
							<div className="video-hover">
								<iframe
									className="hover-effect"
									src="https://www.youtube.com/embed/ONi27_CzeSo"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</div>
							<div className="mx-auto">
								<TransformWrapper
									className="mx-auto gallery-image"
									style={{ margin: "0 auto" }}
									defaultScale={1}
									defaultPositionX={1}
									defaultPositionY={1}
								>
									<TransformComponent
										style={{ margin: "0 auto" }}
										className="mx-auto text-center"
									>
										<img
											src={Andre}
											alt=""
											className="img-fluid gallery-image mx-auto cursor"
										/>
									</TransformComponent>
								</TransformWrapper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
