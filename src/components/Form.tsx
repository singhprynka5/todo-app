import React, { HTMLProps, ChangeEvent } from "react";

interface Props extends HTMLProps<HTMLFormElement> {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

const Form = ({ handleInputChange, inputValue, ...props }: Props) => {
  return (
    <form {...props}>
      <input
        className="input-field"
        placeholder="Enter Your todo here"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button className="btn">Add</button>
    </form>
  );
};
export default Form;
