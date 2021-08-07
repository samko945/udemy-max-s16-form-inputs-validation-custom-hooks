import React, { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
	const {
		value: nameValue,
		isValid: nameIsValid,
		hasError: nameHasError,
		valueChangeHandler: nameValueChangeHandler,
		inputBlurHandler: nameInputBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailValueChangeHandler,
		inputBlurHandler: emailInputBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.includes("@"));

	let formIsValid = false;
	if (nameIsValid && emailIsValid) {
		formIsValid = true;
	}

	const submitFormHandler = (e) => {
		e.preventDefault();
		if (!formIsValid) return;
		console.log(nameValue);
		resetNameInput();
		resetEmailInput();
	};

	const formInputClasses = (inputHasError) => {
		return !inputHasError ? "form-control" : "form-control invalid";
	};

	return (
		<form onSubmit={submitFormHandler}>
			<div className={formInputClasses(nameHasError)}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameValueChangeHandler}
					onBlur={nameInputBlurHandler}
					value={nameValue}
				/>
				{nameHasError && <p className="error-text">Name must not be empty.</p>}
			</div>
			<div className={formInputClasses(emailHasError)}>
				<label htmlFor="email">Your Email</label>
				<input
					type="email"
					id="email"
					onChange={emailValueChangeHandler}
					onBlur={emailInputBlurHandler}
					value={emailValue}
				/>
				{emailHasError && <p className="error-text">Enter a valid email.</p>}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
