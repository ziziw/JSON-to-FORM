import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Dropdown = ({ name, label, options }) => {
    const { handleChange } = useContext(FormContext);
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select id={name} name={name} className="form-select form-control" aria-label="Default select example" onChange={(event) => handleChange(name, event)}>
                <option>Choisissez un pays</option>
                {options.length > 0 &&
                    options.map((option, i) => (
                        <option key={i} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
        </div>
    );
};

export default Dropdown;
