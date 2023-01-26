import { CardInfo } from "../../components/card-info"
import "./styles.scss"

export const Home: React.FunctionComponent = () => {
  return (
    <section className="header">
        <div className="header__background-image"></div>
        <div className="business-card">
          <CardInfo />
        </div>
      </section>
  )
}