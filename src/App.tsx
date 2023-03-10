import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import classes from "./App.module.sass";
import { Accordion } from "./assets/components/Accordion/Accordion";
import BoxComponent from "./assets/components/BoxComponent/BoxComponent";
import { Button } from "./assets/components/Button/Button";
import { CarouselPagination } from "./assets/components/CarouselPagination/CarouselPagination";
import CheckBoxComponent from "./assets/components/CheckBoxComponent/CheckBoxComponent";
import { CircularProgression } from "./assets/components/CircrularProgression/CircularProgression";
import { Comments } from "./assets/components/Comments/Comments";
import CustomHeaders from "./assets/components/CustomHeaders/CustomHeaders";
import CustomizedTables from "./assets/components/CustomizedTable/CustomizedTable";
import { Dropdown } from "./assets/components/Dropdown/Dropdown";
import { Input } from "./assets/components/Input/Input";
import InputTextComponent from "./assets/components/InputTextComponent/InputTextComponent";
import LikeTagIcons from "./assets/components/LikeTagIcons/LikeTagIcons";
import { Modal } from "./assets/components/Modal/Modal";
import NumericStepperComponent from "./assets/components/NumericStepperComponent/NumericStepperComponent";
import { ProgressIndicator } from "./assets/components/ProgressIndicator/ProgressIndicator";
import { Radio } from "./assets/components/Radio/Radio";
import RadioGroupComponent from "./assets/components/RadioGroupComponent/RadioGroupComponent";
import { Search } from "./assets/components/Search/Search";
import { Select } from "./assets/components/Select/Select";
import SwitchComponent from "./assets/components/SwitchComponent/SwitchComponent";
import TableComponent from "./assets/components/TableComponent/TableComponent";
import { Toast } from "./assets/components/Toast/Toast";
import { Tooltip } from "./assets/components/Tooltip/Tooltip";
import { Filters } from "./components/Filters/Filters";
import { SearchBar } from "./components/SearchBar/SearchBar";

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

	const [isModal, setIsModal] = useState(false);

	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	const handleIsModal = () => setIsModal(!isModal);

	return (
		<div className={classes.wrapper}>
			Daniil
			<div className={classes.button}>
				<div className={classes.forms}>Forms</div>
				<div className={classes.buttons}>Buttons</div>
				<span className={classes.size}>Large</span>
				<div className={classes.descriptions}>
					?????????????????? Button ???????????????? ?????????? ???????????????????????? ?????????????????????????? ??????????????
					(OnChange, onClick, ?? ??.??). ?????????? ?? ???????? ???????????????????? ???????????????? ??????????????????
					????????????????, ?? ???????????? size ?? view. size ?????????? 3 ???????????????? ???????????????? (large,
					medium, small). ?? view 4 ???????????????? ???????????????? ???????? (primary, secondary,
					subtle, text). ???? ?? ???????????????????? ?????????? ???????????????? ??????????. ?????????????????? ????????????
					?????????? ???????????????? disabled.
				</div>
				<div className={classes.large}>
					<Button size="large" view="primary">
						Button
					</Button>

					<Button size="large" view="secondary">
						Button
					</Button>

					<Button size="large" view="subtle">
						Button
					</Button>

					<Button size="large" view="text">
						Button
					</Button>

					<Button size="large" view="primary" disabled>
						Button
					</Button>
				</div>
				<span className={classes.size}>Medium</span>
				<div className={classes.large}>
					<Button size="medium" view="primary">
						Button
					</Button>

					<Button size="medium" view="secondary">
						Button
					</Button>

					<Button size="medium" view="subtle">
						Button
					</Button>

					<Button size="medium" view="text">
						Button
					</Button>

					<Button size="medium" view="primary" disabled>
						Button
					</Button>
				</div>
				<span className={classes.size}>Small</span>
				<div className={classes.large}>
					<Button size="small" view="primary">
						Button
					</Button>

					<Button size="small" view="secondary">
						Button
					</Button>

					<Button size="small" view="subtle">
						Button
					</Button>

					<Button size="small" view="text">
						Button
					</Button>

					<Button className="" size="small" view="primary" disabled>
						Button
					</Button>
				</div>
				<span className={classes.size}>Icon</span>
				<div className={classes.descriptions}>
					?????????????????? Icon ?? ???????????? ???????????? ???????????????? ???????????????? ???? ???????????????????? Button.
					???????????????? ???????????????? view, ?????????????? ?????????? 2 ???????????????? (primary, secondary),
					???????????????? name-???????????????? ????????????. ???? ???????????? ????????????, ???? ?????????? ??????????????????
					???????????????????? ???????????????? ???????????? ?? ?????????? svg ?? ?????????? ?? ?????????? index.ts
					?????????????????????????? ???? ???? ????????????????.
				</div>

				<div className={classes.icon}>
					<Button.Icon name="forward" view="primary" />
					<Button.Icon name="forward" view="secondary" />
				</div>
			</div>
			<div className={classes.dropdown}>
				<span className={classes.options}>Dropdown</span>
				<div className={classes.descriptions}>
					?????????????????? Dropdown ???????????????? ???????????????? scroll ?? options. Options ??????
					???????????? ???????????????? (?????? ??????????????), ?? ?????????????? ?????????????????????? ?????? ????????????????
					dropdown. scroll ???? ?????? ?????? ???????????? ???????? ?? ?????? ?????????? ???? ?????????????? ??????????
					???????????????? ?????? ???????????????? ?????????? ?????????????????? ?????? ????????????
				</div>
				<div className={classes.option}>
					<Dropdown scroll={scroll} options={options} />
				</div>
			</div>
			<div className={classes.accordion}>
				<b>Accordion</b>
				<div className={classes.descriptions}>
					Accordion ???????????????? ???????????????? title, children. title ?????????????????? ??????????????.
					children, ?????????? ????????, ?????? ???????????? ???????? ???????????????? ???????????? ????????????????????
				</div>
				<div className={classes.component}>
					<Accordion title="Active accordion state">
						Here???s some example text that may answer an FAQ or give the user
						some helpful advice.
					</Accordion>

					<Accordion title="Active accordion state" disabled={true}>
						Here???s some example text that may answer an FAQ or give the user
						some helpful advice.
					</Accordion>
				</div>
			</div>
			<div className={classes.select}>
				<div className={classes.display}>Display</div>
				<div className={classes.tabs}>Tabs</div>
				<div className={classes.sectionTabs}>Section tabs</div>

				<div className={classes.array}>
					{[...Array(5)].map((id: number) => (
						<Select key={id} />
					))}
				</div>
			</div>
			<div className={classes.carousel}>
				<div className={classes.sectionTabs}>Section tabs</div>
				<div className={classes.array}>
					{[...Array(5)].map(() => (
						<CarouselPagination />
					))}
				</div>
			</div>
			<div className={classes.progress}>
				<div className={classes.sectionTabs}>Progress Indicator</div>
				<div className={classes.array}>
					<ProgressIndicator />
					<CircularProgression />
				</div>
			</div>
			<div className={classes.comments}>
				<div className={classes.sectionTabs}>Comments</div>
				<Comments>
					I wonder if there is a way this can be learned quickly.
				</Comments>
			</div>
			<div className={classes.toast}>
				<div className={classes.sectionTabs}>Toasts</div>
				<div className={classes.descriptions}>
					Toasts ???????????????? ???????????????? dissmisible, state. dissmisible ???????????????? ????
					?????????????????? ???????????? close, ???? ?? state ???? ?????????????????? ???????????????? (????????????,
					??????????????, ????????????????)
				</div>
				<div className={classes.array}>
					<div className={classes.standart}>
						<Toast dissmisible={false} state="general">
							General (Full screen width)
						</Toast>
						<Toast dissmisible={false} state="success">
							Success (Full screen width)
						</Toast>
						<Toast dissmisible={false} state="error">
							Error (Full screen width)
						</Toast>
					</div>
					<div className={classes.dissmisible}>
						<Toast dissmisible={true} state="general">
							General (Full screen width)
						</Toast>
						<Toast dissmisible={true} state="success">
							Success (Full screen width)
						</Toast>
						<Toast dissmisible={true} state="error">
							Error (Full screen width)
						</Toast>
					</div>
				</div>
			</div>
			<div className={classes.tooltips}>
				<div className={classes.sectionTabs}>Tooltips</div>
				<div className={classes.descriptions}>
					Tooltip ???????????????? ?????????????? view,?????????????? ???????????????? ???? ???????????????????? ????????????????
					???????????????????????? ?? tooltip
				</div>
				<div className={classes.array}>
					<Tooltip>
						Here is some helpful explainer text to assist the user in
						understanding how a certain feature works.
					</Tooltip>
					<Tooltip view="right">
						Here is some helpful explainer text to assist the user in
						understanding how a certain feature works.
					</Tooltip>
				</div>
			</div>
			<div className={classes.modal}>
				<div className={classes.sectionTabs}>Modal</div>
				<div className={classes.descriptions}>
					Modal ???????????????? ???????????????? title, isModal, children. title ?????? ??????????????????
					???????????? ???????????? ???????????????????? ????????, isModal ?????????????????????? ????????
					??????????????/?????????????? ?? children ???????????????? ???????????? ???????????????????? ????????
				</div>
				<Button onClick={handleIsModal}>Open Modal</Button>
				<Modal
					title="Welcome to Pegasus"
					handleIsModal={handleIsModal}
					isModal={isModal}
				>
					See all the new features we???ve added through our tutorial.
				</Modal>
			</div>
			<div className={classes.searchBar}>
				<SearchBar />
			</div>
			{/* <div className={classes.container}></div>
			Bekzod
			<div className={classes.components}>
				<SwitchComponent />
				<BoxComponent />
				<CheckBoxComponent />
				<RadioGroupComponent />
				<NumericStepperComponent />
				<Avatar />
				<LikeTagIcons />
				<CustomizedTables />
				<CustomHeaders />
				<TableComponent />
				<InputTextComponent />
				<Input placeholder="ho" />
			</div> */}
		</div>
	);
}

export default App;
