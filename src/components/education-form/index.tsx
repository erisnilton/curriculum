import { useForm, FormProvider } from "react-hook-form";
import { EducationSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "../textarea";
import "./styles.scss";
import { useModal } from "../modal";
import Button from "../button";
import { useEducationContext } from "../../contexts/education-context";
import { Input } from "../input";
import react, { useEffect } from "react";
import { CreateEducation, GetEducationById, UpdateEducation } from "../../backend";
import { toast } from "react-toastify";

export interface EducationFormProps {
  edit?: boolean;
  id?: number
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
            <Input label="Data de Início" name="start_date" />
          </div>
          <div className="education__form--input">
            <Input label="Data de Termino" name="end_date" />
          </div>
          <div className="education__form--input">
            <TextArea label="Descrição" name="description" />
          </div>

          <div className="education__form--action">
            <Button color="secondary" onClick={modal.close}>
              Cancelar
            </Button>
            <Button color="primary">Salvar</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default EducationForm;
