import "./styles.scss";
import { UseFormRegister, FieldValues, FieldErrorsImpl } from "react-hook-form";

export interface InputProps {
  register: Partial<UseFormRegister<FieldValues>>;
  placeholder: string;
  name: string;
  error?: string | undefined;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "date"
    | "tel"
    | "url"
    | "search";
}

export const Input: React.FunctionComponent<InputProps> = (props) => {
  const { placeholder, register, error, name, type } = props;
  return (
    <div className="wrapper">
      <input className="wrapper__input" type={type} placeholder={placeholder} {...register} />
      {error && <span>{ error }</span>}
    </div>
  );
};
