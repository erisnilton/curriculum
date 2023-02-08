import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

export interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FunctionComponent<SidebarProps> = (props) => {
  const user = {
    name: "Erisnilton Freitas",
    title: "Desenvolvedor Front-end",
    image: "https://github.com/erisnilton.png",
  };

  const navigate = useNavigate();

  const handleSignOut = async () => {
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__header__image">
          <img src={user?.image} alt="Foto de perfil" />
        </div>
        <div className="sidebar__header__info">
          <h1>{user?.name}</h1>
          <h2>{user?.title}</h2>
        </div>
      </div>
      <div className="sidebar__menu">
        <NavLink to="/register/about">Sobre</NavLink>
        <NavLink to="/register/education">Formação Educacional</NavLink>
        <NavLink to="/register/experience">Experiência Profissional</NavLink>
      </div>
      {/* <div className="sidebar__footer">
        <Button color="danger" size="sm" onClick={handleSignOut}>
          Sair
        </Button>
      </div> */}
    </div>
  );
};
export default Sidebar;
