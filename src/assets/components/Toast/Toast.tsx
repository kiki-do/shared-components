import { useMemo } from "react";
import type { FC, ReactNode } from "react";
import { Icon } from "../Icon/Icon";
// import { Icon } from "../Icon/Icon";
import clsx from "clsx";
import classes from "./Toast.module.sass";

export const STATES = {
	general: classes.general,
	success: classes.success,
	error: classes.error,
} as const;

export interface ToastProps {
	children: ReactNode;
	dissmisible?: boolean;
	className?: string;
	state?: keyof typeof STATES;
}

export interface ToastComponent extends FC<ToastProps> {}

export const Toast: ToastComponent = ({
	children,
	dissmisible = false,
	className,
	state = "error",
}) => {
	const wrapperClassName = useMemo(
		() => clsx(classes.wrapper, STATES[state], {}, className),
		[className, state]
	);

	return (
		<div className={wrapperClassName}>
			{children}
			{dissmisible && <Icon className={classes.icon} name="close" size={20} />}
		</div>
	);
};
