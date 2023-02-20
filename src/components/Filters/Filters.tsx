import type { FC } from "react";
import { Button } from "../../assets/components/Button/Button";
import { Radio } from "../../assets/components/Radio/Radio";
import classes from "./Filters.module.sass";

export const Filters: FC = () => {
	return (
		<div className={classes.wrapper}>
			<h1 className={classes.title}>Фильтры</h1>

			<div className={classes.filter}>
				{[...Array(4)].map(() => (
					<Radio text="Фильтр по умолчанию" />
				))}
			</div>

			<Button view="secondary">Добавить фильтры</Button>
		</div>
	);
};
