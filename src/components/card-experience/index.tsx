import Button from "../button";
import TimeLineItem from "../timeline-item";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./styles.scss";
import Modal from "../modal";
import Dialog from "../dialog";
import { useState } from "react";
import { useExperienceContext } from "../../contexts/experience-context";
import ExperienceForm from "../experience-form";
import { DeleteExperience } from "../../backend";
import Confirm from "../confirm";

export const CardExperience: React.FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [idSelected, setIdSelected] = useState<number>();

  const { items, loadItems } = useExperienceContext();
  
  const edit = Object.keys(items).length > 0;

  const handleDelete = (id: number | undefined) => async () => {
    setIdSelected(id);
    setConfirmModal(true);
  };

  const handleOK = async () => {
    await DeleteExperience(idSelected);
    setConfirmModal(false);
    loadItems();
  };

  const handleCancel = () => {
    setConfirmModal(false);
  };
  return (
    <>
      {items.map((item) => (
        <TimeLineItem pointer={item.institution.at(0)} key={item.id}>
          <div className="card-experience">
            <h6 className="card-experience-title">{item.institution}</h6>
            <div className="card-experience-subtitle">
              <span>
                {`${item.title} | ${item.start_date} - ${item.end_date}`}{" "}
              </span>
            </div>
            <p className="card-experience-description">{item.description}</p>
            <div className="card-experience-actions">
              <Button
                color="primary"
                size="sm"
                onClick={() => {
                  setIdSelected(item.id);
                  setIsModalVisible(true);
                }}
              >
                <EditIcon />
              </Button>
              <Button color="danger" size="sm" onClick={handleDelete(item.id)}>
                <DeleteIcon />
              </Button>
            </div>
          </div>
        </TimeLineItem>
      ))}

      <Modal open={isModalVisible} onChangeOpen={setIsModalVisible}>
        <Dialog>
          <ExperienceForm edit={edit} id={idSelected} />
        </Dialog>
      </Modal>

      <Modal open={confirmModal} onChangeOpen={setConfirmModal}>
        <Dialog>
          <Confirm
            title="Deletar"
            message="Deseja realmente excluir este item?"
            onConfirm={handleOK}
            onCancel={handleCancel}
          />
        </Dialog>
      </Modal>
    </>
  );
};
