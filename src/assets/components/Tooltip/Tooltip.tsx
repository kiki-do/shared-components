import { useMemo } from "react";
import type { FC, ReactNode } from "react";
import classes from "./Tooltip.module.sass";
import clsx from "clsx";

export const VIEWS = {
	left: classes.left,
	right: classes.right,
} as const;

export interface TooltipsProps {
	children: ReactNode;
	view?: keyof typeof VIEWS;
	className?: string;
}

export interface TooltipsComponent extends FC<TooltipsProps> {}

export const Tooltip: TooltipsComponent = ({
	children,
	view = "left",
	className,
}) => {
	const wrapperClassName = useMemo(
		() => clsx(classes.wrapper, VIEWS[view], {}, className),
		[className, view]
	);

	return (
		<div className={wrapperClassName}>
			<div className={classes.text}>{children}</div>
		</div>
	);
};
