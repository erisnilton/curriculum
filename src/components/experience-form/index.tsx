import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ExperienceSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../input";
import TextArea from "../textarea";
import { useModal } from "../modal";
import Button from "../button";
import "./styles.scss";

import { useExperienceContext } from "../../contexts/experience-context";
import { CreateExperience, GetExperienceById, UpdateExperience } from "../../backend";
import { toast } from "react-toastify";

export interface ExperienceFormProps {
  edit?: boolean;
  id?: number;
}

const ExperienceForm: React.FunctionComponent<ExperienceFormProps> = ({
  edit,
  id,
}) => {
  const methods = useForm<ExperienceSchema>({
    resolver: zodResolver(ExperienceSchema),
  });

  const modal = useModal();
  const { loadItems } = useExperienceContext();

  const onSubmit = async (values: ExperienceSchema) => {
    if (edit) {
      await UpdateExperience(values, id);
      toast.success("Informação atualizada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      await CreateExperience(values);

      toast.success("Informação cadastrada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    modal.close();
    loadItems();
  };

  useEffect(() => {
    if (edit && id) {
      GetExperienceById(id).then((item) => {
        methods.setValue("institution", item.institution);
        methods.setValue("title", item.title);
        methods.setValue("start_date", item.start_date);
        methods.setValue("end_date", item.end_date);
        methods.setValue("description", item.description);
      });
    }
  }, [edit, id]);

  return (
    <div className="experience__form">
      <h2>Experiência Profissional</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="experience__form--input">
            <Input label="Titulo" name="title" />
          </div>
          <div className="experience__form--input">
            <Input label="Instituição" name="institution" />
          </div>
          <div className="experience__form--input">
            <Input label="Data de Início" name="start_date" />
          </div>
          <div className="experience__form--input">
            <Input label="Data de Termino" name="end_date" />
          </div>
          <div className="experience__form--input">
            <TextArea label="Descrição" name="description" />
          </div>

          <div className="experience__form--action">
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
