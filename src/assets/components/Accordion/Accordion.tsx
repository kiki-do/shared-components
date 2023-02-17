import { useState } from "react";
import type { FC, ReactNode } from "react";
import { Icon } from "../Icon/Icon";
import classes from "./Accordion.module.sass";

export interface AccordionProps {
	title: string;
	children: ReactNode;
	disabled?: boolean;
}

export interface AccorionComponent extends FC<AccordionProps> {}

export const Accordion: AccorionComponent = ({
	title,
	children,
	disabled = false,
}) => {
	const [isActive, setIsActive] = useState(false);

	const accorionHandler = () => {
		setIsActive(!isActive);
	};

	return (
		<div
			className={!disabled ? classes.wrapper : classes.disabled}
			onClick={accorionHandler}
		>
			<div className={classes.title}>
				{title}
				<Icon
					className={classes.icon}
					name={isActive ? "minus" : "plus"}
					size={18}
				/>
			</div>
			{isActive && <span className={classes.text}>{children}</span>}
		</div>
	);
};
