import React, { useEffect } from "react";

import SchoolIcon from "@mui/icons-material/School";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
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
            <h6 className="businesscard__info--description">{items.title}</h6>
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
            <h1>Começe adicionando suas informações sobre <b>você</b> aqui!</h1>
          </div>
        )}
        {wasItems && (
          <div className="businesscard__image">
            <img src={items.url_image} alt="Imagem do perfil do usuário" />
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
