import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import "./styles.scss";
import Button from "../button";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input";
import InputPassword from "../input-password";

const LoginForm: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const methods = useForm<LoginSchema>({ resolver: zodResolver(LoginSchema) });

  const onSubmit: SubmitHandler<LoginSchema> = ({ registration, password }) => {
    if (registration === "" || password === "") return;
    navigate("/");
  };
  return (
    <div className="login">
      <div className="login__panel">
        <h1 className="">Faça Login</h1>
      </div>

      <div className="login__arrow">
        <ArrowForwardIosSharpIcon fontSize="large" />
      </div>

      <FormProvider {...methods}>
        <form className="login__form" onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="login__form--input">
              <Input label="Matricula" name="registration" type="text" />
              <InputPassword />
          </div>
          <div className="login__form--action">
            <Button color="primary" size="md">
              Fazer Login
            </Button>
            <Link to={"/account"}>Criar Conta</Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
