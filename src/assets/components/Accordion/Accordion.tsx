import { FC, useState } from "react";
import { Icon } from "../Icon/Icon";
import classes from "./Accordion.module.sass";

export interface AccordionProps {
	title: string;
	text: string;
}

export interface AccorionComponent extends FC<AccordionProps> {}

export const Accordion: AccorionComponent = ({ title, text }) => {
	const [isActive, setIsActive] = useState(false);

	const dropdownHandler = () => {
		setIsActive(!isActive);
	};

	return (
		<div className={classes.wrapper} onClick={dropdownHandler}>
			<div className={classes.title}>
				{title}
				<Icon
					className={classes.icon}
					name={isActive ? "minus" : "plus"}
					size={18}
				/>
			</div>
			{isActive && <span className={classes.text}>{text}</span>}
		</div>
	);
};
