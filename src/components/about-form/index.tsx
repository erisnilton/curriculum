import React, { useEffect } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { AboutSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "../textarea";
import { Input } from "../input";
import { useModal } from "../modal";
import "./styles.scss";
import Button from "../button";
import { UpdateAbout, CreateAbout } from "../../backend";
import { toast } from "react-toastify";


import { useAboutContext } from "../../contexts/about-context";

export interface AboutFormProps {
  edit?: boolean;
}

const AboutForm: React.FunctionComponent<AboutFormProps> = ({ edit }) => {
  const methods = useForm<AboutSchema>({ resolver: zodResolver(AboutSchema) });
  const { items, loadItems } = useAboutContext();

  const onSubmit: SubmitHandler<AboutSchema> = async (values) => {
    if (edit) {
      await UpdateAbout(values, 1);
      toast.success("Informações Atualizada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      await CreateAbout(values);
      toast.success("Informações Cadastrada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    modal.close();
    loadItems();
  };

  useEffect(() => {
    if (edit) {
      methods.setValue("fullname", items.fullname);
      methods.setValue("address", items.address);
      methods.setValue("title", items.title);
      methods.setValue("email", items.email);
      methods.setValue("phone", items.phone);
      methods.setValue("url_image", items.url_image);
      methods.setValue("url_lattes", items.url_lattes);
      methods.setValue("url_instagram", items.url_instagram);
      methods.setValue("url_linkedin", items.url_linkedin);
      methods.setValue("url_github", items.url_github);
      methods.setValue("about", items.about);
    }
  }, [edit]);

  const modal = useModal();
  return (
    <div className="about__form">
      <h2>Sobre</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="about__form--input">
            <Input label="Nome completo" name="fullname" />
          </div>
          <div className="about__form--input">
            <Input label="Endereço" name="address" />
          </div>
          <div className="about__form--input">
            <Input label="Título" name="title" />
          </div>
          <div className="about__form--input">
            <Input label="Email" name="email" type="email" />
          </div>
          <div className="about__form--input">
            <Input label="Telefone" name="phone" />
          </div>
          <div className="about__form--input">
            <Input label="Imagem" name="url_image" />
          </div>
          <div className="about__form--input">
            <Input label="Curriculo Lattes" name="url_lattes" />
          </div>
          <div className="about__form--input">
            <Input label="Instagran" name="url_instagram" />
          </div>
          <div className="about__form--input">
            <Input label="Linkedin" name="url_linkedin" />
          </div>
          <div className="about__form--input">
            <Input label="Github" name="url_github" />
          </div>
          <div className="about__form--input">
            <TextArea label="Sobre" name="about" />
          </div>
          <div className="about__form--action">
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
