import classNames from "classnames";
import "./style.scss";

export interface ButtonProps {
  children?: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  rounded?: boolean;
  flat?: boolean;
  size?: "sm" | "md" | "lg";
  name?: string;
  title?: string;
  onClick?: React.DOMAttributes<HTMLButtonElement>["onClick"];
}

const Button = (props: ButtonProps) => {
  const { color, size, children, rounded, flat,name, title, onClick } = props;
  return (
    <button
      className={classNames([
        "btn",
        `btn--color-${color}`,
        `btn--size-${size}`,
        {
          "btn--rounded": rounded,
          "btn--flat": flat,
        },
      ])}
      onClick={onClick}
      name={name}
      title={title}
      aria-label={name}
    >
      {" "}
      {children && children}
    </button>
  );
};

export default Button;
