import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const CircularProgression = () => {
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			if (percentage < 100) {
				setPercentage(percentage + 1);
			}
		}, 50);
	}, [percentage]);

	return (
		<div style={{ textAlign: "center" }}>
			<div style={{ width: 120 }}>
				<CircularProgressbar
					value={percentage}
					text={`${percentage}% Done`}
					styles={{
						path: {
							stroke: "#5F2EEA",
						},
						text: {
							fill: "#4E4B66",
							fontSize: "16px",
							fontWeight: 600,
							paddingRight: "50px !important",
						},
					}}
				/>
			</div>
		</div>
	);
};
