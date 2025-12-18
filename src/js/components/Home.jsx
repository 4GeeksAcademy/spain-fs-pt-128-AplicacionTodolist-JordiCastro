import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [listToDo, setListToDo] = useState([]);

	const handleKeyUp = (e) => {
		if (e.key === "Enter") {
			setListToDo([...listToDo, e.target.value])
			e.target.value = "";
		}
	}
	return (
		<div className="text-center">
			<h1 className="my-5">ToDo List</h1>
			<div className="listPaper mx-auto text-start p-4">
				<input
					name="list"
					type="text"
					placeholder="What needs to be done?"
					className="input"
					onKeyUp={handleKeyUp}
				></input>
				{
					listToDo.map((listItem, index) => {
						return (
							<div className="pb-3 my-3 items d-flex justify-content-between">
								<div key={index} className="">{listItem}</div>
								<button className="delete">X</button>
							</div>
						);
					})
				}
				<p className="m-0 text-secondary">{listToDo.length} items</p>
			</div>
		</div>
	);
};

export default Home;