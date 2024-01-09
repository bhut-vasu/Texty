import './App.css';
import Form from './components/Form';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
	BrowserRouter as Router,
	Route,
} from "react-router-dom";

function App() {
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type
		})

		setTimeout(() => { setAlert(null); }, 1500);
	}

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = "#042743";
			showAlert("Darkness has arrived !!", "success");
			document.title = "Texty : Darkness";		// to change title 
			setTimeout(() => {
				document.title = "Texty : An Online Text Converter";
			}, 1500);
		}
		else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert("It's bright Today", "success");
			document.title = "Texty : Daylight";
			setTimeout(() => {
				document.title = "Texty : An Online Text Converter";
			}, 1500);
		}
	}

	return (
		<Router>
			<Alert alert={alert} />
			<div className="container my-3">
				<Route exact path="/">		{/* exact is necessary, without it react is confused betn / and /about */}
					{<Form heading="Text Converter and Analyzing Tool" mode={mode} showAlert={showAlert} />}
				</Route>
			</div>
		</Router>
	);
}

export default App;
