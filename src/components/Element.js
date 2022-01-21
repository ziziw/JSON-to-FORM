import React from "react";
import Dropdown from "./elements/Dropdown";
import Input from "./elements/Input";

const Element = ({ field: { type, name, label, options, value } }) => {
    switch (type) {
        case "text":
            return <Input name={name} label={label} value={value} />;
        case "dropdown":
            return <Dropdown name={name} label={label} options={options} value={value} />;
        default:
            return null;
    }
};

export default Element;
