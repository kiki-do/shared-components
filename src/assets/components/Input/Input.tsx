import { useMemo } from "react";
import type { FC, ChangeEventHandler } from "react";
import clsx from "clsx";
import classes from "./Input.module.sass";
import { Icon } from "../Icon/Icon";

export interface InputProps {
	className?: string;
	value?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string | undefined;
}

export interface InputComponent extends FC<InputProps> {}

export const Input: InputComponent = ({
	className,
	placeholder,
	value,
	onChange,
}) => {
	return (
		<div className={classes.wrapper}>
			<input
				className={classes.input}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>

			<Icon className={classes.icon} name="close" />
		</div>
	);
};
