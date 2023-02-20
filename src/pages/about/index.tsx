import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import AboutForm from "../../components/about-form";
import Button from "../../components/button";
import Dialog from "../../components/dialog";
import Modal from "../../components/modal";
import { useAboutContext } from "../../contexts/about-context";
import "./styles.scss";

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
            name="edit-about"
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
            name="add-about"
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
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <Dialog>
            <AboutForm edit={edit} />
          </Dialog>
        </div>
      </Modal>
    </section>
  );
};
