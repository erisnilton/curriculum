import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { ExperienceSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../button";

import "./styles.scss";
import { Input } from "../input";
import TextArea from "../textarea";

const ExperienceForm: React.FunctionComponent = () => {
  const methods = useForm<ExperienceSchema>({
    resolver: zodResolver(ExperienceSchema),
  });

  const onSubmit = () => {
    console.log("submit");
  };

  const handleReset = () => {
    methods.reset();
  };

  return (
    <div className="experience__form">
      <h1>Experiência Profissional</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input label="Titulo" name="title" />
          <Input label="Instituição" name="intitution" />
          <Input label="Data de Início" name="start_date" />
          <Input label="Data de Termino" name="end_date" />
          <TextArea label="Descrição" name="description" />

          <div className="d-flex">
            <Button color="primary" size="md">
              Finalizar
            </Button>
            <Button color="danger" size="md" onClick={handleReset}>
              Voltar
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ExperienceForm;