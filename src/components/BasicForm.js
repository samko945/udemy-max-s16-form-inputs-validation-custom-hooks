import useInput from "../hooks/use-input2";

const BasicForm = (props) => {
	const {
		value: nameValue,
		isValid: nameIsValid,
		hasError: nameHasError,
		formControlClasses: nameFormControlClasses,
		valueChangeHandler: nameValueChangeHandler,
		inputBlurHandler: nameInputBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: lnameValue,
		isValid: lnameIsValid,
		hasError: lnameHasError,
		formControlClasses: lnameFormControlClasses,
		valueChangeHandler: lnameValueChangeHandler,
		inputBlurHandler: lnameInputBlurHandler,
		reset: resetLnameInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		formControlClasses: emailFormControlClasses,
		valueChangeHandler: emailValueChangeHandler,
		inputBlurHandler: emailInputBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.includes("@"));

	const formIsValid = nameIsValid && lnameIsValid && emailIsValid;

	const submitHandler = (e) => {
		e.preventDefault();
		if (!formIsValid) return;
		console.log(nameValue);
		resetNameInput();
		resetLnameInput();
		resetEmailInput();
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="control-group">
				<div className={nameFormControlClasses}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						value={nameValue}
						onChange={nameValueChangeHandler}
						onBlur={nameInputBlurHandler}
					/>
					{nameHasError && <p className="error-text">Enter your first name.</p>}
				</div>
				<div className={lnameFormControlClasses}>
					<label htmlFor="lname">Last Name</label>
					<input
						type="text"
						id="lname"
						value={lnameValue}
						onChange={lnameValueChangeHandler}
						onBlur={lnameInputBlurHandler}
					/>
					{lnameHasError && <p className="error-text">Enter your last name.</p>}
				</div>
			</div>
			<div className={emailFormControlClasses}>
				<label htmlFor="email">E-Mail Address</label>
				<input
					type="email"
					id="email"
					value={emailValue}
					onChange={emailValueChangeHandler}
					onBlur={emailInputBlurHandler}
				/>
				{emailHasError && <p className="error-text">Enter a valid e-mail address.</p>}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
