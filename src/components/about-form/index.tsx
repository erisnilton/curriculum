import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { AboutSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input";
import Button from "../button";
import TextArea from "../textarea";

import "./styles.scss";

const AboutForm: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const methods = useForm<AboutSchema>({ resolver: zodResolver(AboutSchema) });

  const onSubmit: SubmitHandler<AboutSchema> = () => {};

  const handleReset = () => {
    methods.reset();
  };
  return (
    <div className="about__form">
      <h1>Sobre</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            <div>
              <Input label="Nome" name="name" />
              <Input label="Sobrenome" name="surname" />
              <Input label="Endereço" name="address" />
            </div>
            <div>
              <Input label="Título" name="title" />
              <Input label="Email" name="email" type="email" />
            </div>
            <Input label="Imagem" name="image" />
            <Input label="Curriculo Lattes" name="lattes" type="text" />
            <Input label="Instagran" name="instagran" type="text" />
            <Input label="Linkedin" name="linkedin" type="text" />
            <Input label="Github" name="github" type="text" />
            <TextArea label="Sobre" name="about" />
          </div>
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

export default AboutForm;
