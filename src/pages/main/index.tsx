import { InfoProvider } from "../../contexts/about-context";
import { EducationProvider } from "../../contexts/education-context";
import { ExperienceProvider } from "../../contexts/experience-context";
import { Education } from "../education";
import { Experience } from "../experience";
import { Home } from "../home";

export const Main: React.FunctionComponent = () => {
  return (
    <div>
      <InfoProvider>
        <Home />
      </InfoProvider>
      <EducationProvider>
        <Education />
      </EducationProvider>
      <ExperienceProvider>
        <Experience />
      </ExperienceProvider>
    </div>
  );
};
