import { useEffect, useState } from "react";
import WorksList from "../worksList/WorksList.jsx";
import "./works.scss";
import { featuredWork, webWork, mobileWork, gamesWork } from "../../data";

export default function Works() {
	const list = [
		{
			id: "featured",
			title: "Featured",
		},
		{
			id: "web",
			title: "Web Apps",
		},
		{
			id: "mobile",
			title: "Mobile Apps",
		},
		{
			id: "games",
			title: "Games",
		},
	];
	const [selectedTag, selectTag] = useState("featured");
	const [data, setData] = useState([]);

	useEffect(() => {
		switch (selectedTag) {
			case "featured":
				setData(featuredWork);
				break;
			case "web":
				setData(webWork);
				break;
			case "mobile":
				setData(mobileWork);
				break;
			case "games":
				setData(gamesWork);
				break;
			default:
				setData(featuredWork);
				break;
		}
	}, [selectedTag]);

	return (
		<div className="works" id="works">
			<h1>Works</h1>
			<ul>
				{list.map((item) => (
					<WorksList
						title={item.title}
						active={selectedTag === item.id}
						selectTag={selectTag}
						id={item.id}
						key={item.id}
					/>
				))}
			</ul>
			<div className="container">
				{data.map((d) => (
					<div className="item" key={d.id}>
						<img src={d.img} alt="" />
						<h3>{d.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
}
