import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import "./styles.scss";

import { useNavigate } from "react-router-dom";
import { AboutSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input";
import Button from "../button";
import TextArea from "../textarea";

const AboutForm: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const methods = useForm<AboutSchema>({ resolver: zodResolver(AboutSchema) });

  const onSubmit: SubmitHandler<AboutSchema> = () => {};
  return (
    <div className="container">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            <Input placeholder="Nome" name="name" />
            <Input placeholder="Sobrenome" name="surname" />
            <Input placeholder="Título" name="title" />
            <Input placeholder="Email" name="email" />
            <Input placeholder="Endereço" name="address" />
            <TextArea name="about" placeholder="Sobre" />
          </div>

          <Button color="primary" size="md">
            OK
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AboutForm;
