import { useEducationContext } from "../../contexts/education-context";
import Button from "../button";
import TimeLineItem from "../timeline-item";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./styles.scss";
import Modal from "../modal";
import Dialog from "../dialog";
import EducationForm from "../education-form";
import { createRef, useRef, useState, useMemo } from "react";
import { DeleteEducation } from "../../backend";
import Confirm from "../confirm";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const CardEducation: React.FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [idSelected, setIdSelected] = useState<number>();

  const { items, loadItems } = useEducationContext();

  const edit = Object.keys(items).length > 0;

  const educationList = useMemo(
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
    await DeleteEducation(idSelected);
    setConfirmModal(false);
    loadItems();
  };

  const handleCancel = () => {
    setConfirmModal(false);
  };

  return (
    <>
      <TransitionGroup className="list-item">
        {educationList.map(({ item, nodeRef }) => (
          <CSSTransition timeout={250} classNames="item" key={item.id}>
            <TimeLineItem pointer={item.institution.at(0)}>
              <div ref={nodeRef} className="card__education">
                <div className="card__education--header">
                  <h6 className="card__education--header-title">
                    {item.institution}
                  </h6>
                  <div className="card__education--header-subtitle">
                    <span>
                      {`${item.course} | ${item.start_date} - ${item.end_date}`}
                    </span>
                  </div>
                </div>
                <div className="card__educataion--body">
                  <p className="card__education--body-description">
                    {item.description}
                  </p>
                </div>
                <div className="card__education--footer">
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
                  <Button
                    color="danger"
                    size="sm"
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
            <EducationForm edit={edit} id={idSelected} />
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
