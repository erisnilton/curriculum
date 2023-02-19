import "./styles.scss";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
export interface TimeLineItemProps {
  children: React.ReactNode;
  pointer?: string;
}

const TimeLineItem: React.FunctionComponent<TimeLineItemProps> = ({
  children,
  pointer = "",
}: TimeLineItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="timeline__item">
      <div className="timeline__item-circle">
        <span>{pointer}</span>
      </div>
      <div className="timeline__item-content">{children}</div>
    </div>
  );
};

export default TimeLineItem;
