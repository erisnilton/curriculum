import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { createRef, useMemo, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { DeleteExperience } from "../../backend";
import { useExperienceContext } from "../../contexts/experience-context";
import Button from "../button";
import Confirm from "../confirm";
import Dialog from "../dialog";
import ExperienceForm from "../experience-form";
import Modal from "../modal";
import TimeLineItem from "../timeline-item";
import "./styles.scss";

export const CardExperience: React.FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [idSelected, setIdSelected] = useState<number>();

  const { items, loadItems } = useExperienceContext();

  const edit = Object.keys(items).length > 0;

  const experienceList = useMemo(
    () =>
      items.map((item) => ({
        item,
        nodeRef: createRef<HTMLDivElement>(),
      })),
    [items]
  );

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
      <TransitionGroup className="list-item">
        {experienceList.map(({ item, nodeRef }) => (
          <CSSTransition timeout={250} classNames="item" key={item.id}>
            <TimeLineItem pointer={item.institution.at(0)} key={item.id}>
              <div ref={nodeRef} className="card__experience">
                <div className="card__experience--header">
                  <span className="card__experience--header-title">
                    {item.institution}
                  </span>
                  <div className="card__experience--header-subtitle">
                    <span>
                      {`${item.title} | ${item.start_date} - ${item.end_date}`}{" "}
                    </span>
                  </div>
                </div>
                <div className="card__experience--body">
                  <p className="card__experience--body-description">
                    {item.description}
                  </p>
                </div>
                <div className="card__experience--footer">
                  <Button
                    color="primary"
                    size="sm"
                    name="edit"
                    title="Editar"
                    onClick={() => {
                      setIdSelected(item.id);
                      setIsModalVisible(true);
                    }}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    color="danger"
                    size="sm"
                    name="delete"
                    title="Deletar"
                    onClick={handleDelete(item.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </div>
              </div>
            </TimeLineItem>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <Modal open={isModalVisible} onChangeOpen={setIsModalVisible}>
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <Dialog>
            <ExperienceForm edit={edit} id={idSelected} />
          </Dialog>
        </div>
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
