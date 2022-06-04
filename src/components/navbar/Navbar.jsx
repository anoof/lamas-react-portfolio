import "./navbar.scss";
import { Person, Mail } from "@mui/icons-material";

export default function Navbar({ isMenuOpen, setMenu }) {
	return (
		<div className={"navbar " + (isMenuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<a href="#home" className="logo">
						anoof.github.io
					</a>
					<div className="contactContainer">
						<Person className="icon" />
						<span>+9591115670</span>
					</div>
					<div className="contactContainer">
						<Mail className="icon" />
						<span>anoofs@gmail.com</span>
					</div>
				</div>
				<div className="right">
					<div className="hamburger" onClick={() => setMenu(!isMenuOpen)}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	);
}
