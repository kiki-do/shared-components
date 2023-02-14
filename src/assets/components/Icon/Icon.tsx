import { createElement, useMemo } from "react";
import type { FC, SVGProps } from "react";
import { IconNames, ICONS } from "./svg";

export interface IconProps extends SVGProps<SVGSVGElement> {
	className?: string;

	name: IconNames;

	size?: number | "auto";
}

export interface IconComponent extends FC<IconProps> {}

export const Icon: IconComponent = ({ name, size = 5, ...props }) => {
	const style = useMemo(
		() => ({
			...(size !== "auto" && { width: size, height: size }),
		}),
		[size]
	);

	return createElement(ICONS[name], { style, ...props });
};
