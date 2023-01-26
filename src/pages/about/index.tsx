import Button from "../../components/button"
import "./styles.scss"

export const About: React.FunctionComponent = () => {
  return (
    <section className="about">
        <div className="about__content">
          <p>
            Hello! I’m John Doe. Senior Web Developer with over 13 years of
            experience specializing in front end development. Experienced with
            all stages of the development cycle for dynamic web projects.Having
            an in-depth knowledge including advanced HTML5, CSS, CSS3, SASS,
            LESS, JSON, XML, Java, JavaScript, JQuery, Angular JS. Strong
            background in management and leadership.
          </p>

          <div className="about__button">
            <Button color="success">Download CV</Button>
            <Button color="success">Contact me</Button>
          </div>
        </div>
      </section>

  )
}