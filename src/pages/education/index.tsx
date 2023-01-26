import TimeLine from "../../components/timeline";
import TimeLineItem from "../../components/timeline-item";
import Book from "../../images/book.png";
import "./styles.scss";

export const Education: React.FunctionComponent = () => {
  return (
    <section className="education">
      <div className="education__header">
        <img src={Book} alt="imagem de um livro" />
        <h2>Educação</h2>
      </div>
      <TimeLine>
        {Array.from({ length: 5 }).map((_, index) => (
          <TimeLineItem  pointer={"P"}>
            <div className="education__card">
              <h6 className="education__card-title">
                Preparatory Education
              </h6>
              <div className="education__card-subtitle">
                <span>Fedrick School</span>
                <span>
                  <small>Jan 1997 - Mar 2000</small>
                </span>
              </div>
              <p className="education__card-description">
                I completed my preparatory education from this prestigious
                institution. I successful completed all the credits without any
                fallout and got A grade overall.
              </p>
            </div>
          </TimeLineItem>
        ))}
      </TimeLine>
    </section>
  );
};
