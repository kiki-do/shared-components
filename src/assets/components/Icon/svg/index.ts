import { ReactComponent as forward } from "./forward.svg";
import { ReactComponent as plus } from "./plus.svg";
import { ReactComponent as minus } from "./minus.svg";

export const ICONS = {
	forward,
	plus,
	minus,
} as const;

export type IconNames = keyof typeof ICONS;
