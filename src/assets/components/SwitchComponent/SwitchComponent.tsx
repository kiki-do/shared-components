import "./SwitchComponent.sass";

const SwitchComponent = () => {
	return (
		<div className="switch">
			<div className="switch__1">
				<input id="switch-1" type="checkbox" />
				<label htmlFor="switch-1"></label>
			</div>

			<div className="switch__2">
				<input id="switch-2" type="checkbox" />
				<label htmlFor="switch-2"></label>
			</div>
		</div>
	);
};

export default SwitchComponent;
