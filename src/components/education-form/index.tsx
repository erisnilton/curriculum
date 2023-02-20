import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  CreateEducation,
  GetEducationById,
  UpdateEducation
} from "../../backend";
import { useEducationContext } from "../../contexts/education-context";
import { EducationSchema } from "../../lib/validation";
import Button from "../button";
import { Input } from "../input";
import { useModal } from "../modal";
import TextArea from "../textarea";
import "./styles.scss";

export interface EducationFormProps {
  edit?: boolean;
  id?: number;
}

const EducationForm: React.FunctionComponent<EducationFormProps> = ({
  edit,
  id,
}) => {
  const methods = useForm<EducationSchema>({
    resolver: zodResolver(EducationSchema),
  });

  const modal = useModal();
  const { loadItems } = useEducationContext();

  useEffect(() => {
    if (edit && id) {
      GetEducationById(id).then((item) => {
        methods.setValue("institution", item.institution);
        methods.setValue("course", item.course);
        methods.setValue("start_date", item.start_date);
        methods.setValue("end_date", item.end_date);
        methods.setValue("description", item.description);
      });
    }
  }, [edit, id]);

  const onSubmit = async (values: EducationSchema) => {
    if (edit) {
      await UpdateEducation(values, id);
      toast.success("Informação atualizada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      await CreateEducation(values);
      toast.success("Informação adicionada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    modal.close();
    loadItems();
  };

  const hadleCancel = (e) => {
    e.preventDefault();
    modal.close();
  };

  return (
    <div className="education__form">
      <h2>Formação Educacional</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="education__form--input">
            <Input label="Instituição de ensino" name="institution" />
          </div>
          <div className="education__form--input">
            <Input label="Cursos" name="course" />
          </div>
          <div className="education__form--input">
            <Input label="Data de Início" name="start_date" type="date" />
          </div>
          <div className="education__form--input">
            <Input label="Data de Termino" name="end_date" type="date" />
          </div>
          <div className="education__form--input">
            <TextArea label="Descrição" name="description" />
          </div>

          <div className="education__form--action">
            <Button color="secondary" name="cancel" onClick={hadleCancel}>
              Cancelar
            </Button>
            <Button color="primary" name="save">Salvar</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default EducationForm;
