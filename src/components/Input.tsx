import { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface InputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { className, name, placeholder, type, onChange } = props;
  return (
    <input
      className={`w-full rounded border border-gray-400 p-2 ${className}`}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
};

export default Input;
