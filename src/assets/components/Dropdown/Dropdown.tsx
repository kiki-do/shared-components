import { useState, useEffect, useRef } from "react";
import type { FC, MutableRefObject, ChangeEvent } from "react";
import { Icon } from "../Icon/Icon";
import classes from "./Dropdown.module.sass";
import { optionsProps } from "../../../App";

export interface DropdownProps {
	options: optionsProps[];
	className?: string;
}

export interface DropdownComponent extends FC<DropdownProps> {}

export const Dropdown: DropdownComponent = ({ options }) => {
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
	}, []);

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
				<div className={classes.content}>
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
