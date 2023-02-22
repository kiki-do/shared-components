import { Filters } from "../Filters/Filters";
import type { FC } from "react";
import { Button } from "../../assets/components/Button/Button";
import { Search } from "../../assets/components/Search/Search";
import classes from "./SearchBar.module.sass";
import { CardInput } from "../CardInput/CardInput";
import { useMatchMedia } from "../../hooks/useMatchMedia";

export const SearchBar: FC = () => {
	const { isMobile }: any = useMatchMedia();
	return (
		<div className={classes.wrapper}>
			<div className={classes.search}>
				<Search />
				{!isMobile && (
					<Button.Icon
						name="configure"
						className={classes.button}
						view="subtle"
					/>
				)}
			</div>
			<Filters />
			<div className={classes.input}>
				<CardInput />
			</div>
		</div>
	);
};
