import React, { useContext, useState } from "react";
import { FormContext } from "../../FormContext";
import validator from "validator";

const Input = ({ name, label, value }) => {
    const { handleChange } = useContext(FormContext);
    const [inputValue, setInputValue] = useState("");
    const [emailError, setEmailError] = useState("");
    const validateEmail = (e) => {
        var email = e.target.value;

        if (validator.isEmail(email)) {
            setEmailError("Valid Email :)");
        } else {
            setEmailError("Enter valid Email!");
        }

        if (email.length === 0) {
            setEmailError("");
        }
    };

    function formatPhoneNumber(value) {
        // if input value is falsy eg if the user deletes the input, then just return
        if (!value) return value;

        // clean the input for any non-digit values.
        const phoneNumber = value.replace(/[^\d]/g, "");

        // phoneNumberLength is used to know when to apply our formatting for the phone number
        const phoneNumberLength = phoneNumber.length;

        // we need to return the value with no formatting if its less then four digits
        // this is to avoid weird behavior that occurs if you  format the area code to early

        if (phoneNumberLength < 4) return phoneNumber;

        // if phoneNumberLength is greater than 4 and less the 7 we start to return
        // the formatted number
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }

        // finally, if the phoneNumberLength is greater then seven, we add the last
        // bit of formatting and return it.
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }

    const handleInput = (e) => {
        // this is where we'll call our future formatPhoneNumber function that we haven't written yet.
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        // we'll set the input value using our setInputValue
        setInputValue(formattedPhoneNumber);
    };

    function phoneFunction(name, e) {
        handleChange(name, e);
        handleInput(e);
    }

    function emailFunction(name, e) {
        handleChange(name, e);
        validateEmail(e);
    }

    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            {(name === "phone_number" && <input type="text" className="form-control" id={name} value={inputValue} onChange={(event) => phoneFunction(name, event)} placeholder="(xxx) xxx-xxxx" />) ||
                (name === "email" && (
                    <div>
                        <input type="text" className="form-control" id={name} value={value} placeholder="your@email.com" onChange={(event) => emailFunction(name, event)} />{" "}
                        <span
                            style={{
                                fontWeight: "bold",
                                color: "red",
                            }}
                        >
                            {emailError}
                        </span>
                    </div>
                )) || <input type="text" className="form-control" id={name} value={value} onChange={(event) => handleChange(name, event)} />}
        </div>
    );
};

export default Input;
