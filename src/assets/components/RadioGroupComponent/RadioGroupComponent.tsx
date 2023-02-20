import {
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
} from "@mui/material";

const RadioGroupComponent = () => {
	return (
		<FormControl>
			<RadioGroup
				row
				aria-labelledby="demo-row-radio-buttons-group-label"
				name="row-radio-buttons-group"
				style={{
					columnGap: "20px",
				}}
			>
				<FormControlLabel
					value="female"
					control={<Radio />}
					label="Female"
					style={{
						transform: "scale(1.5)",
					}}
				/>
				<FormControlLabel
					value="male"
					control={<Radio />}
					label="Male"
					style={{
						transform: "scale(1.5)",
					}}
				/>
			</RadioGroup>
		</FormControl>
	);
};

export default RadioGroupComponent;
