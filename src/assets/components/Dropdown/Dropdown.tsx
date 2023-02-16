import { useState, useEffect, useRef, useMemo } from "react";
import type { FC, MutableRefObject } from "react";
import { Icon } from "../Icon/Icon";
import classes from "./Dropdown.module.sass";
import { optionsProps } from "../../../App";
import clsx from "clsx";

export interface DropdownProps {
	options: optionsProps[];
	className?: string;
	scroll: number;
}

export interface DropdownComponent extends FC<DropdownProps> {}

export const Dropdown: DropdownComponent = ({ options, scroll }) => {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState("Initial");
	const dropdownRef = useRef() as MutableRefObject<HTMLInputElement>;

	useEffect(() => {
		const hanlder = (e: any) => {
			if (isActive && !dropdownRef?.current.contains(e.target)) {
				setIsActive(false);
			}
		};

		document.addEventListener("mousedown", hanlder);
	});

	const contentClassName = useMemo(
		() =>
			clsx(classes.content, {
				[classes.upper]: scroll < 1650,
			}),
		[scroll]
	);

	const dropdownHandler = () => {
		setIsActive(!isActive);
	};

	return (
		<div className={classes.wrapper}>
			<input
				ref={dropdownRef}
				className={classes.input}
				value={selected}
				onClick={dropdownHandler}
				readOnly
			/>
			<Icon
				className={isActive ? classes.activeIcon : classes.icon}
				name="forward"
				size={10}
				onClick={dropdownHandler}
			/>

			{isActive && (
				<div className={contentClassName}>
					{options.map(({ id, option }: optionsProps) => (
						<div
							key={id}
							className={classes.option}
							onClick={() => {
								setSelected(option);
								setIsActive(false);
							}}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
