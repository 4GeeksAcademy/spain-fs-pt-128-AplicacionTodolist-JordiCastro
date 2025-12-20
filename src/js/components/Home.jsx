import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [listToDo, setListToDo] = useState([]);

	const handleKeyUp = (e) => {
		if (e.key === "Enter") {
			if (e.target.value !== "") {
				setListToDo([...listToDo, e.target.value])
				e.target.value = "";
			}

		}
	}
	const deleteBtn = (deleteIndex) => {
		setListToDo(listToDo.filter((item, index) => index !== deleteIndex));
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
							<div key={index} className="pb-2 my-3 items d-flex justify-content-between">
								<div className=""><i class="fa-solid fa-circle-dot"></i> {listItem}</div>
								<button className="btn delete"
									onClick={() => deleteBtn(index)}
								>X</button>
							</div>
						);
					})
				}
				<p className="m-0 text-secondary counterItems">{listToDo.length} items</p>
			</div>
		</div>
	);
};

export default Home;