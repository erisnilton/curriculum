import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { AboutSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "../textarea";
import { Input } from "../input";
import { useModal } from "../modal";
import "./styles.scss";
import Button from "../button";

const AboutForm: React.FunctionComponent = () => {
  const methods = useForm<AboutSchema>({ resolver: zodResolver(AboutSchema) });

  const onSubmit: SubmitHandler<AboutSchema> = (values) => {
    console.log(values);
    modal.close();
  };

  const modal = useModal();
  return (
    <div className="about__form">
      <h2>Sobre</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            <Input label="Nome" name="name" />
            <Input label="Sobrenome" name="surname" />
            <Input label="Endereço" name="address" />
            <Input label="Título" name="title" />
            <Input label="Email" name="email" type="email" />
            <Input label="Telefone" name="phone" />
            <Input label="Imagem" name="image" />
            <Input label="Curriculo Lattes" name="lattes" type="text" />
            <Input label="Instagran" name="instagran" type="text" />
            <Input label="Linkedin" name="linkedin" type="text" />
            <Input label="Github" name="github" type="text" />
            <TextArea label="Sobre" name="about" />
          </div>
          <div style={{textAlign: 'end'}}>
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

export default AboutForm;
