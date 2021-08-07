import useInput from "../hooks/use-input2";

const BasicForm = (props) => {
	const {
		value: nameValue,
		isValid: nameIsValid,
		hasError: nameHasError,
		formControlClasses: emailFormControlClasses,
		valueChangeHandler: nameValueChangeHandler,
		inputBlurHandler: nameInputBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "");

	const formIsValid = nameIsValid;

	const submitHandler = (e) => {
		e.preventDefault();
		if (!formIsValid) return;
		console.log(nameValue);
		resetNameInput();
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="control-group">
				<div className={emailFormControlClasses}>
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
				<div className="form-control">
					<label htmlFor="name">Last Name</label>
					<input type="text" id="name" />
				</div>
			</div>
			<div className="form-control">
				<label htmlFor="name">E-Mail Address</label>
				<input type="text" id="name" />
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
