import { useMemo, ReactNode } from "react";
import type { FC } from "react";

import classes from "./Modal.module.sass";
import clsx from "clsx";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { useMatchMedia } from "../../../hooks/useMatchMedia";

export interface ModalProps {
	title?: string;
	isModal: boolean;
	children: ReactNode;
	handleIsModal: () => void;
}

export interface ModalComponent extends FC<ModalProps> {}

export const Modal: ModalComponent = ({
	title,
	children,
	handleIsModal,
	isModal,
}) => {
	const isMobile = useMatchMedia();

	const wrapperClassName = useMemo(
		() =>
			clsx(classes.wrapper, {
				[classes.isModal]: isModal,
			}),
		[isModal]
	);
	return (
		<div className={wrapperClassName} onClick={handleIsModal}>
			<div
				className={classes.content}
				onClick={event => event.stopPropagation()}
			>
				<div className={classes.title}>{title}</div>
				<div className={classes.text}>{children}</div>
				<Button size={isMobile && "medium"} view="primary">
					See Tutorial
				</Button>
				<Button className={classes.view} view="text">
					Skip for now
				</Button>
				<Icon
					className={classes.icon}
					size={25}
					onClick={handleIsModal}
					name="close"
				/>
			</div>
		</div>
	);
};
