import { useEducationContext } from "../../contexts/education-context";
import Button from "../button";
import TimeLineItem from "../timeline-item";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./styles.scss";
import Modal from "../modal";
import Dialog from "../dialog";
import EducationForm from "../education-form";
import { useState } from "react";
import { DeleteEducation } from "../../backend";
import Confirm from "../confirm";

export const CardEducation: React.FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [idSelected, setIdSelected] = useState<number>();

  const { items, loadItems } = useEducationContext();
  const edit = Object.keys(items).length > 0;

  const handleDelete = (id: number | undefined) => async () => {
    setIdSelected(id);
    setConfirmModal(true);
  };

  const handleOK = async () => {
    await DeleteEducation(idSelected);
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
          <div className="card-education">
            <h6 className="card-education-title">{item.institution}</h6>
            <div className="card-education-subtitle">
              <span>
                {`${item.course} | ${item.start_date} - ${item.end_date}`}
              </span>
            </div>
            <p className="card-education-description">{item.description}</p>
            <div className="card-education-actions">
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
          <EducationForm edit={edit} id={idSelected} />
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
