import "./menu.scss";

export default function Menu({ isMenuOpen, setMenu }) {
	return (
		<div className={"menu " + (isMenuOpen && "active")}>
			<ul>
				<a href="#home">
					<li onClick={() => setMenu(false)}>Home</li>
				</a>
				<a href="#works">
					<li onClick={() => setMenu(false)}>Works</li>
				</a>
				<a href="#contact">
					<li onClick={() => setMenu(false)}>Contact</li>
				</a>
			</ul>
		</div>
	);
}
