import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import Button from "../../components/button";
import { CardExperience } from "../../components/card-experience";
import Dialog from "../../components/dialog";
import ExperienceForm from "../../components/experience-form";
import Modal from "../../components/modal";
import TimeLine from "../../components/timeline";
import XP from "../../images/xp.png";
import "./styles.scss";

export const Experience: React.FunctionComponent = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  return (
    <>
      <section className="experience">
        <div className="experience__header">
          <img src={XP} alt="imagem que remete a experiencia proficional" />
          <h2>Experience</h2>
        </div>
        <TimeLine>
          <CardExperience />
          <div className="experience__button">
            <Button
              color="success"
              size="sm"
              name="add-experience"
              onClick={() => setIsVisibleModal(true)}
            >
              <div className="experience__button--action">
                <AddIcon />
                <span>Experiência Profissionais</span>
              </div>
            </Button>
          </div>
        </TimeLine>
        <Modal open={isVisibleModal} onChangeOpen={setIsVisibleModal}>
          <div style={{ width: "100%", maxWidth: "800px" }}>
            <Dialog>
              <ExperienceForm />
            </Dialog>
          </div>
        </Modal>
      </section>
    </>
  );
};
