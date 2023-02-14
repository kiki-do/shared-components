import "./App.css";
import { Button } from "./assets/components/Button/Button";

function App() {
	return (
		<div>
			<Button size="large" view="primary">
				Button
			</Button>

			<Button.Icon name="forward" view="primary" />
		</div>
	);
}

export default App;
