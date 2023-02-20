import { ReactComponent as forward } from "./forward.svg";
import { ReactComponent as plus } from "./plus.svg";
import { ReactComponent as minus } from "./minus.svg";
import { ReactComponent as close } from "./close.svg";
import { ReactComponent as user } from "./user.svg";
import { ReactComponent as search } from "./search.svg";
import { ReactComponent as configure } from "./configure.svg";

export const ICONS = {
	forward,
	plus,
	minus,
	close,
	user,
	search,
	configure,
} as const;

export type IconNames = keyof typeof ICONS;
