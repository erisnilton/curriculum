import "./styles.scss";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Button from "../../components/button";
import Modal, { useModal } from "../../components/modal";
import React, { useState, useEffect } from "react";
import Dialog from "../../components/dialog";
import AboutForm from "../../components/about-form";
import { GetAboutService } from "../../services";
import { Info } from "../../model";
import { useAboutContext } from "../../contexts/about-context";

export const About: React.FunctionComponent = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const { items } = useAboutContext();
  const edit = Object.keys(items).length > 0;
  return (
    <section className="about">
      <div className="about__content">
        <p>{items.about}</p>
      </div>
      <div className="about__button">
        {edit ? (
          <Button
            color="success"
            size="sm"
            onClick={() => setIsVisibleModal(true)}
          >
            <div className="about__button--action">
              <EditIcon />
              <span>Editar Informações Pessoais</span>
            </div>
          </Button>
        ) : (
          <Button
            color="success"
            size="sm"
            onClick={() => setIsVisibleModal(true)}
          >
            <div className="about__button--action">
              <AddIcon />
              <span>Informações Pessoais</span>
            </div>
          </Button>
        )}
      </div>
      <Modal open={isVisibleModal} onChangeOpen={setIsVisibleModal}>
        <Dialog>
          <AboutForm edit={edit} />
        </Dialog>
      </Modal>
    </section>
  );
};
