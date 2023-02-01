import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import "./styles.scss";
import Button from "../button";

import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input";

const LoginForm: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const methods = useForm<LoginSchema>({ resolver: zodResolver(LoginSchema) });

  useEffect(() => {
    methods.setFocus("email");
  },[]);

  const onSubmit: SubmitHandler<LoginSchema> = ({ email, password }) => {
    if (email === "" || password === "") return;
    navigate("/");
  };
  return (
    <div className="container">
      <div className="container__left">
        <h1>Faça Login</h1>
      </div>

      <div className="container__right">
        <div className="container__right-login">
          <h1>Faça Login</h1>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div>
                <Input placeholder="Email" name="email" />
                <Input placeholder="Senha" name="password" type="password" />
              </div>
              <Button color="primary" size="lg">
                Fazer Login
              </Button>
              <Link to={""}>Criar Conta</Link>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
