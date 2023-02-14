import { ReactComponent as forward } from "./forward.svg";

export const ICONS = {
	forward,
} as const;

export type IconNames = keyof typeof ICONS;
