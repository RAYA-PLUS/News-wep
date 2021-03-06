import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import ReactParticles from "react-particles-js";
import particlesConfig from "./particles-config.js";
import "./styles.scss";
class AllNewsHealth extends React.Component {
    state = {

    }
    render() {
        const { healthArticles } = this.props;
        console.log(healthArticles);
        return (
			<div className="main">
				<Particles>
					<Hero>
						<div className="container">
							<data />
							<div className="row">
								{healthArticles.map((health, i) => (
									<div className="column">
										<Card>
											{/* <Image
												ratio={health.imageRatio}
												src={health.image}
											/> */}
											<div className="card-image">
												<img
													href={health.url}
													id="cards-img"
													className="healthImg"
													src={
														health.urlToImage
													}></img>
											</div>
											<div className="card-title">
												{health.title}
											</div>
											<div className="card-body">
												{health.description}
											</div>
											<strong>Source</strong>:{" "}
											{health.source.name}
											<br></br>
											<div className="card-action">
												<a
													href={health.url}
													target="_blank">
													Read More
												</a>
											</div>
										</Card>
									</div>
								))}
							</div>
						</div>
					</Hero>
				</Particles>
			</div>
			//  <div>
			//     <div>
			//         <ul class='ulContainer'>
			//             {healthArticles.map((health) => (
			//                 <div className="row">
			//                     <div className="col-s12-m7">
			//                         <div className="card" id="cards">
			//                             <li className='healthCard'>
			// <div className="card-image">
			//     <img id="cards-img" class='healthImg' src={health.urlToImage}></img>
			// </div>
			//                                 {/* <strong>Author</strong>: {health.author}<br></br> */}
			//                                 {/* <strong>Content</strong>: {health.content}<br></br> */}
			//                                 <span className="card-title">{health.title}</span>

			//                                 <div className="card-content">
			//                                     <strong>description</strong>: {health.description}<br></br>
			//                                 </div>
			//                                 <strong>Source</strong>: {health.source.name}<br></br>
			//                                 <div className="card-action">
			//                                    <a href={health.url} target='_blank'>Read More...</a>
			//                                  </div>
			//                             </li>
			//                         </div>
			//                     </div>
			//                 </div>
			//             ))}
			//         </ul>
			//     </div>
			// </div>
		);
    }
}

function Card({ children }) {
	// We add this ref to card element and use in onMouseMove event ...
	// ... to get element's offset and dimensions.
	const ref = useRef();

	// Keep track of whether card is hovered so we can increment ...
	// ... zIndex to ensure it shows up above other cards when animation causes overlap.
	const [isHovered, setHovered] = useState(false);

	const [animatedProps, setAnimatedProps] = useSpring(() => {
		return {
			// Array containing [rotateX, rotateY, and scale] values.
			// We store under a single key (xys) instead of separate keys ...
			// ... so that we can use animatedProps.xys.interpolate() to ...
			// ... easily generate the css transform value below.
			xys: [0, 0, 1],
			// Setup physics
			config: {
				mass: 10,
				tension: 400,
				friction: 40,
				precision: 0.00001,
			},
		};
	});

	return (
		<animated.div
			ref={ref}
			className="card"
			onMouseEnter={() => setHovered(true)}
			onMouseMove={({ clientX, clientY }) => {
				// Get mouse x position within card
				const x =
					clientX -
					(ref.current.offsetLeft -
						(window.scrollX ||
							window.pageXOffset ||
							document.body.scrollLeft));

				// Get mouse y position within card
				const y =
					clientY -
					(ref.current.offsetTop -
						(window.scrollY ||
							window.pageYOffset ||
							document.body.scrollTop));

				// Set animated values based on mouse position and card dimensions
				const dampen = 50; // Lower the number the less rotation
				const xys = [
					-(y - ref.current.clientHeight / 2) / dampen, // rotateX
					(x - ref.current.clientWidth / 2) / dampen, // rotateY
					1.07, // Scale
				];

				// Update values to animate to
				setAnimatedProps({ xys: xys });
			}}
			onMouseLeave={() => {
				setHovered(false);
				// Set xys back to original
				setAnimatedProps({ xys: [0, 0, 1] });
			}}
			style={{
				// If hovered we want it to overlap other cards when it scales up
				zIndex: isHovered ? 2 : 1,
				// Interpolate function to handle css changes
				transform: animatedProps.xys.interpolate(
					(x, y, s) =>
						`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
				),
			}}>
			{children}
		</animated.div>
	);
}

function Particles({ children }) {
	return (
		<div style={{ position: "relative" }}>
			<ReactParticles
				params={particlesConfig}
				style={{
					position: "absolute",
					zIndex: 1,
					left: 0,
					right: 0,
					bottom: 0,
					top: 0,
				}}
			/>
			{children && <div style={{ position: "relative" }}>{children}</div>}
		</div>
	);
}

function Hero({ children }) {
	return (
		<div className="hero">
			<div className="hero-body">{children}</div>
		</div>
	);
}

function Image({ ratio, src }) {
	return (
		<div className="image-container">
			<div className="image-inner-container">
				<div
					className="ratio"
					style={{
						paddingTop: ratio * 100 + "%",
					}}>
					<div className="ratio-inner">
						<img src={src} />
					</div>
				</div>
			</div>
		</div>
	);
}
export default AllNewsHealth;
