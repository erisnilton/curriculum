import "./styles.scss";

export interface DialogProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  return (
    <div className="dialog" style={props.style}>
      {props.children}
    </div>
  );
};

export default Dialog;
