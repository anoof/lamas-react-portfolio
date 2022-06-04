import "./home.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Home() {
	const textRef = useRef();
	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: [
				"Software Engineer",
				"Frontend Engineer",
				"User Interface Developer",
			],
		});
	}, []);
	return (
		<div className="home" id="home">
			<div className="contentWrapper">
				<div className="left">
					<div className="textWrapper">
						<h3>Hi there, I am</h3>
						<h1>Anoof Shaikh</h1>
						<h3>
							<span className="typeText" ref={textRef}></span>
						</h3>
					</div>
				</div>
				<div className="right">
					<div className="imageRow">
						<img className="artImage clock" src="assets/clock.svg" alt="" />
						<img className="artImage window" src="assets/window.svg" alt="" />
					</div>
					<div className="imageRow">
						<img className="artImage desk" src="assets/desk.svg" alt="" />
					</div>
				</div>
			</div>
			<div className="footer">
				<a href="#works">
					<ExpandMoreIcon />
				</a>
			</div>
		</div>
	);
}
