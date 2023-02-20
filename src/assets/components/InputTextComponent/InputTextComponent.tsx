import { ChangeEvent, useState } from "react";
import InputMask from "react-input-mask";

import {
	checkEmail,
	checkMessage,
	checkPhoneNumber,
	checkSearch,
	checkUsername,
	normalizePhoneNumber,
} from "../../../utils";
import multiplyLogo from "../../svg-bekzod/multiply.svg";
import userIcon from "../../svg-bekzod/user.svg";
import searchIcon from "../../svg-bekzod/search.svg";

import "./InputTextComponent.sass";

interface IFormFields {
	username: string;
	email: string;
	phoneNumber: string;
	message: string;
	search: string;
}

const defaultFormFields: IFormFields = {
	username: "",
	email: "",
	phoneNumber: "",
	message: "",
	search: "",
};

const InputTextComponent = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [error, setError] = useState<boolean>(false);
	const [usernameErrorMessage, setUsernameErrorMessage] = useState<
		string | null
	>(null);
	const [searchErrorMessage, setSearchErrorMessage] = useState<string | null>(
		null
	);
	const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(
		null
	);
	const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState<
		string | null
	>(null);
	const [messageError, setMessageError] = useState<string | null>(null);
	const [showCloseIcon, setShowCloseIcon] = useState<boolean>(false);

	const { username, email, phoneNumber, message, search } = formFields;

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;

		if (name === "phoneNumber") {
			const rawValue = normalizePhoneNumber(value);

			checkPhoneNumber(value, setPhoneNumberErrorMessage, setError);

			if (value === "") {
				setShowCloseIcon(false);
			} else {
				setShowCloseIcon(true);
			}

			return setFormFields({ ...formFields, [name]: rawValue });
		}

		setFormFields({ ...formFields, [name]: value });

		if (value === "") {
			setShowCloseIcon(false);
		} else {
			setShowCloseIcon(true);
		}

		switch (name) {
			case "username":
				checkUsername(value, setUsernameErrorMessage, setError);
				break;
			case "email":
				checkEmail(value, setEmailErrorMessage, setError);
				break;
			case "message":
				checkMessage(value, setMessageError, setError);
				break;
			case "search":
				checkSearch(value, setSearchErrorMessage, setError);
				break;
		}
	};

	const handleClear = (name: string) => {
		switch (name) {
			case "phoneNumber":
				checkPhoneNumber("", setPhoneNumberErrorMessage, setError);
				break;
			case "username":
				checkUsername("", setUsernameErrorMessage, setError);
				break;
			case "email":
				checkEmail("", setEmailErrorMessage, setError);
				break;
			case "message":
				checkMessage("", setMessageError, setError);
				break;
			case "search":
				checkSearch("", setSearchErrorMessage, setError);
				break;
		}

		setFormFields({ ...formFields, [name]: "" });
	};

	return (
		<form className="form">
			<div className="input-box">
				{phoneNumber && showCloseIcon ? (
					<div className="closeSvg" onClick={() => handleClear("phoneNumber")}>
						<img src={multiplyLogo} alt="Close" />
					</div>
				) : null}
				<InputMask
					mask="+7 (999) 999-99-99"
					className={`${
						phoneNumberErrorMessage && phoneNumberErrorMessage.length > 0
							? "error"
							: ""
					} ${phoneNumberErrorMessage === "" ? "success" : ""}`}
					id="phoneNumber"
					onChange={handleChange}
					type="text"
					placeholder="Phone Number"
					required
					name="phoneNumber"
					value={phoneNumber}
					autoComplete="off"
				/>
				<small>
					{phoneNumberErrorMessage === "" ? (
						<span>Phone Number is valid.</span>
					) : (
						phoneNumberErrorMessage
					)}
				</small>
			</div>

			<div className="input-box">
				{username && showCloseIcon ? (
					<div className="closeSvg" onClick={() => handleClear("username")}>
						<img src={multiplyLogo} alt="Close" />
					</div>
				) : null}
				<div
					className={`wrapper ${
						usernameErrorMessage && usernameErrorMessage.length > 0
							? "error"
							: ""
					} ${usernameErrorMessage === "" ? "success" : ""}`}
				>
					<div className="icon">
						<img src={userIcon} alt="User Icon" />
					</div>
					<input
						id="username"
						className={`${
							usernameErrorMessage && usernameErrorMessage.length > 0
								? "error"
								: ""
						} ${usernameErrorMessage === "" ? "success" : ""}`}
						onChange={handleChange}
						type="text"
						placeholder="Username"
						required
						name="username"
						value={username}
					/>
				</div>

				<small>
					{usernameErrorMessage === "" ? (
						<span>Username is available.</span>
					) : (
						usernameErrorMessage
					)}
				</small>
			</div>

			<div className="input-box">
				{message && showCloseIcon ? (
					<div className="closeSvg" onClick={() => handleClear("message")}>
						<img src={multiplyLogo} alt="Close" />
					</div>
				) : null}
				<textarea
					className={`${
						messageError && messageError.length > 0 ? "error" : ""
					} ${messageError === "" ? "success" : ""}`}
					id="message"
					onChange={handleChange}
					placeholder="Share a reply"
					required
					name="message"
					value={message}
				/>
				<small>
					{messageError === "" ? <span>Success Message!</span> : messageError}
				</small>
			</div>

			<div className="input-box">
				{email && showCloseIcon ? (
					<div className="closeSvg" onClick={() => handleClear("email")}>
						<img src={multiplyLogo} alt="Close" />
					</div>
				) : null}
				<input
					id="email"
					className={`${
						emailErrorMessage && emailErrorMessage.length > 0 ? "error" : ""
					} ${emailErrorMessage === "" ? "success" : ""}`}
					onChange={handleChange}
					type="text"
					placeholder="Email"
					required
					name="email"
					value={email}
				/>
				<small>
					{emailErrorMessage === "" ? (
						<span>Email is valid.</span>
					) : (
						emailErrorMessage
					)}
				</small>
			</div>

			<div className="input-box">
				{search && showCloseIcon ? (
					<div className="closeSvg" onClick={() => handleClear("search")}>
						<img src={multiplyLogo} alt="Close" />
					</div>
				) : null}
				<div
					className={`wrapper ${
						searchErrorMessage && searchErrorMessage.length > 0 ? "error" : ""
					} ${searchErrorMessage === "" ? "success" : ""}`}
				>
					<div className="icon">
						<img src={searchIcon} alt="Search Icon" />
					</div>
					<input
						id="search"
						className={`${
							searchErrorMessage && searchErrorMessage.length > 0 ? "error" : ""
						} ${searchErrorMessage === "" ? "success" : ""}`}
						onChange={handleChange}
						type="text"
						placeholder="Search"
						required
						name="search"
						value={search}
					/>
				</div>

				<small>{searchErrorMessage}</small>
			</div>
		</form>
	);
};

export default InputTextComponent;
