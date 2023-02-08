import "./styles.scss";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";

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
  icon?: React.ReactNode;
  label?: string;
}

export const Input: React.FunctionComponent<InputProps> = (props) => {
  const { placeholder, name, type, icon, label } = props;

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
        {icon && <div className="wrapper__icon">{icon}</div>}
      </div>

      {errors && <span>{errors[name]?.message?.toString()}</span>}
    </div>
  );
};

