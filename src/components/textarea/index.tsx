import { useFormContext } from "react-hook-form";
import "./styles.scss";

export interface TextAreaProps {
  name: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  label?: string;
}

const TextArea: React.FunctionComponent<TextAreaProps> = (props) => {
  const { name, placeholder, rows, cols, label } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="textarea">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};

export default TextArea;
