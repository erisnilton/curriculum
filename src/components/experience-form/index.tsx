import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ExperienceSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";

import "./styles.scss";
import { Input } from "../input";
import TextArea from "../textarea";
import { useModal } from "../modal";
import Button from "../button";

const ExperienceForm: React.FunctionComponent = () => {
  const methods = useForm<ExperienceSchema>({
    resolver: zodResolver(ExperienceSchema),
  });

  const modal = useModal();

  const onSubmit = () => {
    modal.close();
  };

  return (
    <div className="experience__form">
      <h2>Experiência Profissional</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input label="Titulo" name="title" />
          <Input label="Instituição" name="intitution" />
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

export default ExperienceForm;
