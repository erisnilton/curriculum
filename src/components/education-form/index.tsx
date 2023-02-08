import react from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { EducationSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";  
import Button from "../button";
import { Input } from "../input";
import TextArea from "../textarea";

import "./styles.scss";

const EducationForm: React.FunctionComponent = () => {
  const methods = useForm<EducationSchema>({
    resolver: zodResolver(EducationSchema),
  });

  const onSubmit = () => {
    console.log("submit");
  };

  const handleReset = () => {
    methods.reset();
  };

  return (
    <div className="education__form">
      <h1>Formação Educacional</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input label="Instituição de ensino" name="institution" />
          <Input label="Cursos" name="course" />
          <Input label="Data de Início" name="start_date" />
          <Input label="Data de Termino" name="end_date" />
          <TextArea label="Descrição" name="description" />

          <div className="d-flex">
            <Button color="primary" size="md">
              Salvar e continuar
            </Button>
            <Button color="danger" size="md" onClick={handleReset}>
              Cancelar
            </Button>
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
