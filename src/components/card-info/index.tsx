import React from "react";

import Profile from "../../images/profile.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./styles.scss";

export const CardInfo: React.FunctionComponent = () => {
  return (
    <div className="businesscard">
      <div className="businesscard__info">
        <h4 className="businesscard__info--title">JOHN DOE</h4>
        <h6 className="businesscard__info--description">
          Software Engineer & UI/UX Expert
        </h6>
        <ul className="businesscard__info--personal">
          <li>
            <EmailIcon />
            <span>email@mailprovider.com</span>
          </li>
          <li>
            <LanguageIcon />
            <span>yourpersonalwebsite.com</span>
          </li>
          <li>
            <Phone />
            <span>+152 25634 254 846</span>
          </li>

          <li>
            <Place />
            <span>LampStreet 34/3, London, UK</span>
          </li>
        </ul>

        <div className="businesscard__info--social">
          <a href="">
            <FacebookRoundedIcon />
          </a>
          <a href="">
            <InstagramIcon />
          </a>
          <a href="">
            <LinkedInIcon />
          </a>

          <a href="">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="businesscard__image">
        <img src={Profile} alt="Imagem do perfil do usuário" />
      </div>
    </div>
  );
};
