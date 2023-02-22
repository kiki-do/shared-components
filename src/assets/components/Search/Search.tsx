import { useState, useRef } from "react";
import type { ChangeEvent, FC } from "react";
import { Icon } from "../Icon/Icon";
import classes from "./Search.module.sass";
import { useMatchMedia } from "../../../hooks/useMatchMedia";

export const Search: FC = () => {
	const { isMobile }: any = useMatchMedia();
	const [search, setSearch] = useState("");
	const searchRef = useRef<HTMLInputElement>(null);
	const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	return (
		<form className={classes.wrapper}>
			<Icon name="search" />
			<input
				ref={searchRef}
				type="text"
				placeholder="Search"
				onChange={onChangeSearch}
				className={classes.input}
				value={search}
			/>
			{isMobile && <Icon name="configure" />}
		</form>
	);
};
