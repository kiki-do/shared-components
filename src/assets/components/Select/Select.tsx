import { FC, useState } from "react";
import classes from "./Select.module.sass";

export const Select: FC = () => {
	const [isSelected, setIsSelected] = useState(false);

	const selectedHandle = () => {
		setIsSelected(!isSelected);
	};

	return (
		<button className={classes.wrapper} onClick={selectedHandle}>
			<div className={isSelected ? classes.text : classes.unselected}>
				Selected
			</div>
			{isSelected && <span className={classes.selected} />}
		</button>
	);
};
