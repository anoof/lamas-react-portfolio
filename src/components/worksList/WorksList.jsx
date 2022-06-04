import "./worksList.scss";

export default function WorksList({ active, title, selectTag, id }) {
	return (
		<li
			className={"worksList " + (active && "active")}
			onClick={() => selectTag(id)}
		>
			{title}
		</li>
	);
}
