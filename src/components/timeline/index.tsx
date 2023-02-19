import "./styles.scss";

export interface TimelineProps {
  children: React.ReactNode;
}

const TimeLine: React.FunctionComponent<TimelineProps> = ({ children }) => {
  return (
    <div className="timeline">
      <div className="timeline__divider" />
      <div className="timeline__container">{children}</div>
    </div>
  );
};

export default TimeLine;
