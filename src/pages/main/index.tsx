import { About } from "../about";
import { Education } from "../education";
import { Experience } from "../experience";
import { Home } from "../home";

export const Main: React.FunctionComponent = () => {
  return (
    <>
      <Home />
      <About />
      <Education />
      <Experience />
    </>
  );
};
