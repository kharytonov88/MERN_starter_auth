import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const App = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const { name, email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		// console.log(formData);
		const newUser = {
			name,
			email,
			password,
		};
		try {
			const config = {
				headers: {
					"Content-Type": "Application/json",
				},
			};
			const body = JSON.stringify(newUser);
			const res = await axios.post("/api/users", body, config);
			console.log(res.data);
		} catch (err) {
			console.error(err.response.data);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<form onSubmit={(e) => onSubmit(e)}>
					<input
						type="text"
						name="name"
						value={name}
						onChange={(e) => onChange(e)}
					/>
					<input
						type="email"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
					/>
					<input
						type="password"
						name="password"
						value={password}
						onChange={(e) => onChange(e)}
					/>
					<input type="submit" />
				</form>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
