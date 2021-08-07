import React, { useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
	// example enteredAge state
	// enteredAgeIsTouched state

	const enteredNameIsValid = enteredName.trim() !== "";
	const enteredNameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

	let formIsValid = false;
	if (enteredNameIsValid) {
		formIsValid = true;
	}

	const nameInputChangeHandler = (e) => {
		const newValue = e.target.value;
		setEnteredName(newValue);
	};

	const nameInputBlurHandler = (e) => {
		setEnteredNameIsTouched(true);
	};

	const submitFormHandler = (e) => {
		e.preventDefault();
		if (!formIsValid) return;
		console.log(enteredName);
		setEnteredName("");
		setEnteredNameIsTouched(false);
	};

	const formInputClasses = !enteredNameIsInvalid ? "form-control" : "form-control invalid";

	return (
		<form onSubmit={submitFormHandler}>
			<div className={formInputClasses}>
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
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
