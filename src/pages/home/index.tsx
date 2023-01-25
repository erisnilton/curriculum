import { CardInfo } from "../../components/card-info";
import "./styles.scss";

export const Home: React.FunctionComponent = () => {
  return (
    <div>
      <section className="header">
        <div className="header__background-image"></div>
        <div className="header__card">
          <CardInfo/>
        </div>
      </section>
    </div>
  );
};
