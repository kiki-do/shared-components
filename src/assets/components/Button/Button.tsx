import { ReactNode, useMemo } from "react";
import type { FC, MouseEventHandler } from "react";

import classes from "./Button.module.sass";
import clsx from "clsx";
import { ButtonIcon, ButtonIconComponent } from "./ButtonIcon/ButtonIcon";

export const SIZES = {
	large: classes.large,
	medium: classes.medium,
	small: classes.small,
} as const;

export const VIEWS = {
	primary: classes.primary,
	secondary: classes.secondary,
	subtle: classes.subtle,
	text: classes.text,
} as const;

export interface ButtonProps {
	size?: keyof typeof SIZES;
	view?: keyof typeof VIEWS;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	disabled?: boolean | undefined;
	children?: ReactNode;
}

export interface ButtonComponent extends FC<ButtonProps> {
	Icon: ButtonIconComponent;
}

export const Button: ButtonComponent = ({
	size = "large",
	view = "primary",
	className,
	onClick,
	children,
	disabled,
}) => {
	const wrapperClassName = useMemo(
		() => clsx(classes.wrapper, SIZES[size], VIEWS[view], {}, className),
		[className, size, view]
	);

	return (
		<button className={wrapperClassName} onClick={onClick} disabled={disabled}>
			<span className={classes.text}>{children}</span>
		</button>
	);
};

Button.Icon = ButtonIcon;
