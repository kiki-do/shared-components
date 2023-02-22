import type { FC } from "react";
import { Button } from "../../assets/components/Button/Button";
import { Radio } from "../../assets/components/Radio/Radio";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import classes from "./Filters.module.sass";

export const Filters: FC = () => {
	const { isMobile }: any = useMatchMedia();

	return (
		<div className={classes.wrapper}>
			<div className={classes.content}>
				<h1 className={classes.title}>Фильтры</h1>
				<div className={classes.filter}>
					{[...Array(4)].map(() => (
						<Radio text="Фильтр по умолчанию" />
					))}
				</div>
			</div>
			<div className={classes.button}>
				<Button view="secondary" size={isMobile ? "small" : "large"}>
					Добавить фильтры
				</Button>
			</div>
		</div>
	);
};
