import { useFormContext } from "react-hook-form";
import "./styles.scss";

export interface TextAreaProps {
  name: string;
  placeholder: string;
  rows?: number;
  cols?: number;
}

const TextArea: React.FC<TextAreaProps> = (props) => {

  const {name, placeholder, rows, cols} = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="textarea">
      <textarea
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        {...register(name)}
      />
      {/* {errors && (
        <p className="input__error">{errors[name].message?.toString()}</p>
      )} */}
    </div>
  );
};

export default TextArea;

