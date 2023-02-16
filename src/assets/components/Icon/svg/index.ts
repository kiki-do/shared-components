import { ReactComponent as forward } from "./forward.svg";
import { ReactComponent as plus } from "./plus.svg";
import { ReactComponent as minus } from "./minus.svg";
import { ReactComponent as close } from "./close.svg";

export const ICONS = {
	forward,
	plus,
	minus,
	close,
} as const;

export type IconNames = keyof typeof ICONS;
