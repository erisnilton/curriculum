import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import "./styles.scss";

export interface InputProps {
  placeholder?: string;
  name: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "date"
    | "tel"
    | "url"
    | "search";
  label?: string;
  children?: React.ReactNode;
}

export const Input: React.FunctionComponent<InputProps> = (props) => {
  const { placeholder, name, type, label, children } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="wrapper">
      <div className="wrapper__container">
        {label && <label className="wrapper__label">{label}</label>}
        <input
          id={label}
          className={classNames("wrapper__input", { error: errors[name] })}
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />
        {children}
      </div>
      {errors && <span>{errors[name]?.message?.toString()}</span>}
    </div>
  );
};
