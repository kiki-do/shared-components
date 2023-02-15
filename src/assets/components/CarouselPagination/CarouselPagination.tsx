import { useState } from "react";
import type { FC } from "react";
import classes from "./CarouselPagination.module.sass";

export const CarouselPagination: FC = () => {
	const [isSelected, setIsSelected] = useState(false);

	const paginationHandler = () => {
		setIsSelected(!isSelected);
	};

	return (
		<div
			className={isSelected ? classes.wrapper : classes.unselected}
			onClick={paginationHandler}
		/>
	);
};
