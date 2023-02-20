import { zodResolver } from "@hookform/resolvers/zod";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { Input } from "../../components/input";
import InputPassword from "../../components/input-password";
import { LoginSchema } from "../../lib/validation";
import "./styles.scss";

const Account: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const methods = useForm<LoginSchema>({ resolver: zodResolver(LoginSchema) });

  const onSubmit: SubmitHandler<LoginSchema> = ({ registration, password }) => {
    if (registration === "" || password === "") return;
    navigate("/login");
  };
  return (
    <div className="account">
      <div className="account__panel">
        <h1 className="">Cria a sua conta</h1>
      </div>

      <div className="account__arrow">
        <ArrowForwardIosSharpIcon fontSize="large" />
      </div>

      <FormProvider {...methods}>
        <form
          className="account__form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="account__form--input">
            <Input label="Matricula" name="registration" type="text" />
            <InputPassword />
          </div>
          <div className="account__form--action">
            <Button color="primary" name="create-account" size="md">
              Criar Conta
            </Button>
            <Link to={"/login"}>Voltar</Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Account;
