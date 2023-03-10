import React from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import { useAboutContext } from "../../contexts/about-context";
import "./styles.scss";

export const CardInfo: React.FunctionComponent = () => {
  const { items } = useAboutContext();

  const wasItems = Object.keys(items).length > 0;

  return (
    <>
      <div className="businesscard">
        {wasItems ? (
          <div className="businesscard__info">
            <h4 className="businesscard__info--title">{items.fullname}</h4>
            <h5 className="businesscard__info--description">{items.title}</h5>
            <ul className="businesscard__info--personal">
              <li>
                <EmailIcon />
                <span>{items.email}</span>
              </li>
              {/* <li>
            <LanguageIcon />
            <span>{data.site}</span>
          </li> */}
              <li>
                <Phone />
                <span>{items.phone}</span>
              </li>

              <li>
                <Place />
                <span>{items.address || ""}</span>
              </li>
            </ul>

            <div className="businesscard__info--social">
              <a href={items.url_instagram} title="Instagran" target="_blank">
                <InstagramIcon />
              </a>

              <a href={items.url_linkedin} title="Linkedin" target="_blank">
                <LinkedInIcon />
              </a>

              <a href={items.url_github} title="Github" target="_blank">
                <GitHubIcon />
              </a>

              <a
                href={items.url_lattes}
                title="Curriculo Lattes"
                target="_blank"
              >
                <SchoolIcon />
              </a>
            </div>
          </div>
        ) : (
          <div className="businesscard__caption">
            <h1>Come??e adicionando informa????es sobre voc??!</h1>
          </div>
        )}
        {wasItems && (
          <div className="businesscard__image">
            <img src={items.url_image} alt="Imagem do perfil do usu??rio" />
          </div>
        )}
      </div>
      {!wasItems && (
        <div className="businesscard__arrow">
          <span>
            <ArrowDownwardIcon />
          </span>
        </div>
      )}
    </>
  );
};
