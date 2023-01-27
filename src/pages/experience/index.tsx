import TimeLine from "../../components/timeline";
import TimeLineItem from "../../components/timeline-item";
import XP from "../../images/xp.png";
import "./styles.scss";

export const Experience: React.FunctionComponent = () => {
  return (
    <>
      <section className="experience">
        <div className="experience__header">
          <img src={XP} alt="imagem que remete a experiencia proficional" />
          <h2>Experience</h2>
        </div>
        <TimeLine>
          {Array.from({ length: 5 }).map((_, index) => (
            <TimeLineItem pointer="D" key={index}>
              <div className="experience__card">
                <h6 className="experience__card-title">Designer</h6>
                <div className="experience__card-subtitle">
                  <span>RulerSoft</span>
                  <span>
                    <small>Jan 2010 - Mar 2012</small>
                  </span>
                </div>
                <p className="experience__card-description">
                  I started my designing carrier here, spent tow years learning
                  and working in various designing aspects..
                </p>
              </div>
            </TimeLineItem>
          ))}
        </TimeLine>
      </section>
    
    </>
  );
};
