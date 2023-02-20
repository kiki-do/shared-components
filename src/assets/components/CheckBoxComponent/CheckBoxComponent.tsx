import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

const CheckBoxComponent = () => {
	return (
		<div>
			<Checkbox
				defaultChecked
				style={{
					transform: "scale(1.5)",
					color: "#5F2EEA",
				}}
			/>
			<Checkbox
				defaultChecked
				color="secondary"
				style={{
					transform: "scale(1.5)",
				}}
			/>
			<Checkbox
				defaultChecked
				color="success"
				style={{
					transform: "scale(1.5)",
				}}
			/>
			<Checkbox
				defaultChecked
				color="default"
				style={{
					transform: "scale(1.5)",
				}}
			/>
			<Checkbox
				defaultChecked
				style={{
					transform: "scale(1.5)",
				}}
				sx={{
					color: pink[800],
					"&.Mui-checked": {
						color: pink[600],
					},
				}}
			/>
		</div>
	);
};

export default CheckBoxComponent;
