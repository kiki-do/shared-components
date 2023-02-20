import { useMemo, forwardRef } from "react";
import type { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";
import { IconNames } from "../../Icon/svg";
import { Icon, IconProps } from "../../Icon/Icon";

import classes from "./ButtonIcon.module.sass";

export const VIEWS = {
	primary: classes.primary,
	secondary: classes.secondary,
	subtle: classes.subtle,
} as const;

/* Свойство кнопки иконки */
export interface ButtonIconProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		Pick<IconProps, "size"> {
	/* Иконка */
	name: IconNames;

	/* Состояние */
	isActive?: boolean;

	view?: keyof typeof VIEWS;
}

export interface ButtonIconComponent extends FC<ButtonIconProps> {}

export const ButtonIcon: ButtonIconComponent = forwardRef<
	HTMLButtonElement,
	ButtonIconProps
>(
	(
		{
			name,
			isActive = false,
			size = "auto",
			view = "primary",
			className,
			...props
		},
		ref
	) => {
		const wrapperClassName = useMemo(
			() =>
				clsx(
					classes.wrapper,
					VIEWS[view],
					{
						[classes.isActive]: isActive,
					},
					className
				),
			[className, isActive, view]
		);

		const style = useMemo(
			() => ({
				...(size !== "auto" && { width: size, height: size }),
			}),
			[size]
		);

		return (
			<button {...props} ref={ref} className={wrapperClassName} style={style}>
				<Icon className={classes.icon} name={name} size={size} />
			</button>
		);
	}
);
