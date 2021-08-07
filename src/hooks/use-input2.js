import React, { useState } from "react";

export default function useInput(validationHandler) {
	const [value, setValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);

	const isValid = validationHandler(value);
	const hasError = !isValid && isTouched;

	const formControlClasses = hasError ? "form-control invalid" : "form-control";

	const valueChangeHandler = (e) => {
		const newValue = e.target.value;
		setValue(newValue);
	};

	const inputBlurHandler = () => {
		setIsTouched(true);
	};

	const reset = () => {
		setValue("");
		setIsTouched(false);
	};

	return { value, isValid, hasError, formControlClasses, valueChangeHandler, inputBlurHandler, reset };
}
