import react from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { EducationSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input";
import TextArea from "../textarea";
import "./styles.scss";
import { useModal } from "../modal";
import Button from "../button";

const EducationForm: React.FunctionComponent = () => {
  const methods = useForm<EducationSchema>({
    resolver: zodResolver(EducationSchema),
  });

  const modal = useModal();

  const onSubmit = () => {
    modal.close();
  };

  return (
    <div className="education__form">
      <h2>Formação Educacional</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input label="Instituição de ensino" name="institution" />
          <Input label="Cursos" name="course" />
          <Input label="Data de Início" name="start_date" />
          <Input label="Data de Termino" name="end_date" />
          <TextArea label="Descrição" name="description" />
          <div style={{ textAlign: "end" }}>
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

function useFom() {
  throw new Error("Function not implemented.");
}
