import "./styles.scss";
export interface TimeLineItemProps {
  children: React.ReactNode;
  pointer?: string;
}

const TimeLineItem: React.FunctionComponent<TimeLineItemProps> = ({
  children,
  pointer = "",
}: TimeLineItemProps) => {
  return (
    <div className="timeline__item">
      <div className="timeline__item-circle">
        <span>{pointer}</span>
      </div>
      <div className="timeline__item-content">{children}</div>
    </div>
  );
};

export default TimeLineItem;
