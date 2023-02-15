import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import "./styles.scss";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/input";
import InputPassword from "../../components/input-password";
import Button from "../../components/button";

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
            <Button color="primary" size="md">
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
