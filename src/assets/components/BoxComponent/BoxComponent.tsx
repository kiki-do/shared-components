import { Box, Slider } from "@mui/material";

const BoxComponent = () => {
	return (
		<Box width={300} sx={{ width: 200 }}>
			<Slider
				defaultValue={50}
				valueLabelFormat={value => `${value}%`}
				aria-label="Default"
				valueLabelDisplay="auto"
			/>
		</Box>
	);
};

export default BoxComponent;
