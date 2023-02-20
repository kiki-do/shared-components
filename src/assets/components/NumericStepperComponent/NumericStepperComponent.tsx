import { NumericStepper } from "@anatoliygatt/numeric-stepper";

const NumericStepperComponent = () => {
	return (
		<NumericStepper
			activeButtonColor="#ffedd5"
			activeIconColor="#9a3412"
			activeTrackColor="#fddec0"
			disabledIconColor="#fdba74"
			focusRingColor="#fff7ed"
			hoverIconColor="#ea580c"
			inactiveIconColor="#fb923c"
			inactiveTrackColor="#fed7aa"
			initialValue={0}
			maximumValue={100}
			minimumValue={0}
			onChange={function noRefCheck() {}}
			size="sm"
			stepValue={1}
			thumbColor="#f97316"
		/>
	);
};

export default NumericStepperComponent;
