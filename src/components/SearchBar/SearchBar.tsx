import type { FC } from "react";
import { Button } from "../../assets/components/Button/Button";
import { Search } from "../../assets/components/Search/Search";
import classes from "./SearchBar.module.sass";

export const SearchBar: FC = () => {
	return (
		<div className={classes.wrapper}>
			<Search />
			<Button.Icon name="configure" className={classes.button} view="subtle" />
		</div>
	);
};
