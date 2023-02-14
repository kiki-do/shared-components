import { useState } from "react";
import "./App.css";
import { Accordion } from "./assets/components/Accordion/Accordion";
import { Button } from "./assets/components/Button/Button";
import { Dropdown } from "./assets/components/Dropdown/Dropdown";

export interface optionsProps {
	id: number;
	option: string;
}

function App() {
	const options = [
		{ id: 1, option: "Car Parts" },
		{ id: 2, option: "Cat Magnets" },
		{ id: 3, option: "Cantelope Memes" },
		{ id: 4, option: "California Theme" },
	];

	return (
		<div className="wrapper">
			Кнопка
			<Button size="large" view="primary">
				Button
			</Button>
			Кнопка-иконка
			<Button.Icon name="forward" view="primary" />
			Dropdown
			<Dropdown options={options} />
			Аккордеон
			<Accordion
				text="Here’s some example text that may answer an FAQ or give the user some helpful advice."
				title="Active accordion state"
			/>
		</div>
	);
}

export default App;
