import "./contact.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

export default function Contact() {
	return (
		<div className="contact" id="contact">
			<div className="left">
				<h1>Get in Touch</h1>
				<div className="socialsWrapper">
					<a
						className="socialIcon"
						href="https://www.linkedin.com/in/anoof-shaikh"
						rel="noreferrer"
						target="_blank"
					>
						<LinkedInIcon className="icon" />
						<h3>LinkedIn</h3>
					</a>
					<a
						className="socialIcon"
						href="https://github.com/Anoof"
						rel="noreferrer"
						target="_blank"
					>
						<GitHubIcon className="icon" />
						<h3>GitHub</h3>
					</a>
				</div>
				<button
					className="buttonLink"
					onClick={() => window.open("assets/Resume.pdf", "_blank")}
				>
					View Resume
					<OpenInNewOutlinedIcon className="innerIcon" />
				</button>
			</div>
			<div className="right">
				<img src="assets/shake.svg" alt="" />
			</div>
		</div>
	);
}
