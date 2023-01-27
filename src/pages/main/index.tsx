import { About } from "../about";
import { Education } from "../education";
import { Experience } from "../experience";
import { Home } from "../home";
import Login from "../login";

export const Main: React.FunctionComponent = () => {
  return (
    <div>
      <Home />
      <About />
      <Education />
      <Experience />
    </div>
  );
};
