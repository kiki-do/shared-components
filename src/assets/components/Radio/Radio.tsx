import type { FC } from "react";
import classes from "./Radio.module.sass";

export interface RadioProps {
	text?: string;
}

export interface RadioComponent extends FC<RadioProps> {}

export const Radio: RadioComponent = ({ text }) => {
	return (
		<div className={classes.wrapper}>
			<label className={classes.label}>
				<input className={classes.radio} type="radio" name="name1" />
				<span className={classes.text}>{text}</span>
			</label>
		</div>
	);
};
