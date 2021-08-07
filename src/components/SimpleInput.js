import React, { useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== "";
	const enteredNameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
	const enteredEmailIsValid = enteredEmail.includes("@");
	const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

	let formIsValid = false;
	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const nameInputChangeHandler = (e) => {
		const newValue = e.target.value;
		setEnteredName(newValue);
	};

	const emailInputChangeHandler = (e) => {
		const newValue = e.target.value;
		setEnteredEmail(newValue);
	};

	const nameInputBlurHandler = (e) => {
		setEnteredNameIsTouched(true);
	};

	const emailInputBlurHandler = (e) => {
		setEnteredEmailIsTouched(true);
	};

	const submitFormHandler = (e) => {
		e.preventDefault();
		if (!formIsValid) return;
		console.log(enteredName);
		setEnteredName("");
		setEnteredEmail("");
		setEnteredNameIsTouched(false);
		setEnteredEmailIsTouched(false);
	};

	const formInputClasses = (inputIsInvalid) => {
		return !inputIsInvalid ? "form-control" : "form-control invalid";
	};

	return (
		<form onSubmit={submitFormHandler}>
			<div className={formInputClasses(enteredNameIsInvalid)}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{enteredNameIsInvalid && <p className="error-text">Name must not be empty.</p>}
			</div>
			<div className={formInputClasses(enteredEmailIsInvalid)}>
				<label htmlFor="email">Your Email</label>
				<input
					type="email"
					id="email"
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{enteredEmailIsInvalid && <p className="error-text">Email must not be empty.</p>}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
