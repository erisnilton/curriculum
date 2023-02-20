import Button from "../button";

import "./styles.scss";

export interface ConfirmProps {
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
  children?: React.ReactNode;
}

const Confirm: React.FunctionComponent<ConfirmProps> = (props) => {
  const { title, message, onConfirm, onCancel } = props;
  return (
    <div className="confirm">
      <div className="confirm__content">
        <div className="confirm__title">{title}</div>
        <div className="confirm__message">{message}</div>
        <div className="confirm__actions">
          <Button color="secondary" name="cancel" size="sm" onClick={onCancel}>
            Cancelar
          </Button>
          <Button color="primary" name="confirm" size="sm" onClick={onConfirm}>
            Confirmar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
