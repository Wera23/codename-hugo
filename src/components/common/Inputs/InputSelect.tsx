import React from "react";
import Select, { components } from "react-select";

import { SelectComponentsProps } from "react-select/src/Select";

import "./InputSelect.scss";
import { SelectOptions } from "../../Reservation/Options";
import Label from "./Label";

export interface SelectInputProps extends SelectComponentsProps {
  label: string;
  options: SelectOptions[];
  className?: string;
  placeholder: string;
  inputId: string;
}

const DropdownIndicator = (props: any): JSX.Element => {
  return (
    <components.DropdownIndicator {...props}>
      <i className="bi bi-chevron-compact-down input-icon-arrow"></i>
    </components.DropdownIndicator>
  );
};

const InputSelect: React.FC<SelectInputProps> = ({
  label,
  options,
  placeholder,
  className,
  inputId,
  ...props
}) => {
  return (
    <>
      <div className="form-group w-100">
        <Label htmlFor={inputId} label={label}></Label>

        <Select
          label={label}
          rules={{ required: "Please select an option" }}
          placeholder={placeholder}
          options={options}
          inputId={inputId}
          required
          classNamePrefix="react-select-custom"
          className="react-select-container"
          components={{ DropdownIndicator }}
          {...props}
        />
      </div>
    </>
  );
};

export default InputSelect;
