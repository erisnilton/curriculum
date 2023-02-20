import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Button from "../../components/button";
import { CardEducation } from "../../components/card-education";
import Dialog from "../../components/dialog";
import EducationForm from "../../components/education-form";
import Modal from "../../components/modal";
import TimeLine from "../../components/timeline";
import { useEducationContext } from "../../contexts/education-context";
import Book from "../../images/book.png";
import "./styles.scss";

export const Education: React.FunctionComponent = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const { items } = useEducationContext();

  return (
    <section className="education">
      <div className="education__header">
        <img src={Book} alt="imagem de um livro" />
        <h2>Educação</h2>
      </div>
      <TimeLine>
        <CardEducation />
        <div className="education__button">
          <Button
            color="success"
            size="sm"
            name="add-education"
            onClick={() => setIsVisibleModal(true)}
          >
            <div className="education__button--action">
              <AddIcon />
              <span>Informações Educacionais</span>
            </div>
          </Button>
        </div>
      </TimeLine>

      <Modal open={isVisibleModal} onChangeOpen={setIsVisibleModal}>
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <Dialog>
            <EducationForm />
          </Dialog>
        </div>
      </Modal>
    </section>
  );
};
