import classes from "./App.module.sass";
import { Accordion } from "./assets/components/Accordion/Accordion";
import { Button } from "./assets/components/Button/Button";
import { CarouselPagination } from "./assets/components/CarouselPagination/CarouselPagination";
import { CircularProgression } from "./assets/components/CircrularProgression/CircularProgression";
import { Comments } from "./assets/components/Comments/Comments";
import { Dropdown } from "./assets/components/Dropdown/Dropdown";
import { ProgressIndicator } from "./assets/components/ProgressIndicator/ProgressIndicator";
import { Select } from "./assets/components/Select/Select";

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
		<div className={classes.wrapper}>
			<div className={classes.button}>
				<div className={classes.forms}>Forms</div>
				<div className={classes.buttons}>Buttons</div>
				<span className={classes.size}>Large</span>
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

					<Button size="small" view="primary" disabled>
						Button
					</Button>
				</div>

				<span className={classes.size}>Icon</span>
				<div className={classes.icon}>
					<Button.Icon name="forward" view="primary" />
					<Button.Icon name="forward" view="secondary" />
				</div>
			</div>
			<span className={classes.options}>Dropdown</span>
			<div className={classes.dropdown}>
				<Dropdown options={options} />
			</div>
			<div className={classes.accordion}>
				<b>Аккордеон</b>
				<div className={classes.component}>
					<Accordion
						text="Here’s some example text that may answer an FAQ or give the user some helpful advice."
						title="Active accordion state"
					/>

					<Accordion
						disabled={true}
						text="Here’s some example text that may answer an FAQ or give the user some helpful advice."
						title="Active accordion state"
					/>
				</div>
			</div>
			<div className={classes.select}>
				<div className={classes.display}>Display</div>
				<div className={classes.tabs}>Tabs</div>
				<div className={classes.sectionTabs}>Section tabs</div>
				<div className={classes.array}>
					{[...Array(5)].map(() => (
						<Select />
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
		</div>
	);
}

export default App;
