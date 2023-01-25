import { CardInfo } from "../../components/card-info";
import "./styles.scss";

export const Home: React.FunctionComponent = () => {
  return (
    <div>
      <section className="header">
        <div className="header__background-image"></div>
      </section>
      <section>
        <div className="business-card">
          <CardInfo/>
        </div>
        <span>AA</span>
      </section>
    </div>
  );
};
