import { useState, useEffect } from "react";
import classes from "./ProgressIndicator.module.sass";

export const ProgressIndicator = () => {
	const [filled, setFilled] = useState(0);

	useEffect(() => {
		if (filled < 100) {
			setTimeout(() => setFilled(prev => (prev += 2)), 50);
		}
	}, [filled]);

	return (
		<div className={classes.wrapper}>
			<div className={classes.progress}>
				<div
					style={{
						height: "100%",
						width: `${filled}%`,
						backgroundColor: "#5F2EEA",
						transition: "width 0.5s",
					}}
				></div>
			</div>
			<span className={classes.text}>
				<b>{filled}%</b> Done
			</span>
		</div>
	);
};
