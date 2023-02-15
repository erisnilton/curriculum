import React, { useState } from "react";
import { useEffect } from "react";
import { CardInfo } from "../../components/card-info";
import { useAboutContext } from "../../contexts/about-context";
import { Info } from "../../model";
import { About } from "../about";
import "./styles.scss";

export const Home: React.FunctionComponent = () => {
  return (
    <section className="header">
      <div className="header__background-image"></div>
      <div className="business-card">
        <CardInfo />
        <About />
      </div>
    </section>
  );
};
