import type { FC } from "react";
import { Button } from "../../assets/components/Button/Button";
import { Input } from "../../assets/components/Input/Input";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import classes from "./CardInput.module.sass";

export const CardInput: FC = () => {
	const { isMobile }: any = useMatchMedia();
	return (
		<div className={classes.wrapper}>
			<div className={classes.content}>
				{[...Array(4)].map(() => (
					<Input placeholder="ID" />
				))}
			</div>
			{!isMobile && <Button view="secondary">Добавить поле</Button>}
			{isMobile && (
				<div className={classes.buttons}>
					<Button size="small" view="secondary">
						Добавить фильтр
					</Button>
					<Button size="small" view="secondary">
						Выбрать фильтр
					</Button>
				</div>
			)}
		</div>
	);
};
