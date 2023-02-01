import "./styles.scss";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";

export interface InputProps {
  placeholder: string;
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
}

export const Input: React.FunctionComponent<InputProps> = (props) => {
  const { placeholder, name, type } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="wrapper">
      <input
        className={classNames("wrapper__input", {"error": errors[name]})}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {errors && <span>{errors[name]?.message?.toString()}</span>}
    </div>
  );
};
