import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./styles.scss";
import Button from "../button";

import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input";

const LoginForm: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: zodResolver(LoginSchema) });

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                placeholder="Email"
                name="email"
                register={{ ...register("email") }}
                error={errors.email?.message}
              />
              <Input
                placeholder="Senha"
                name="password"
                type="password"
                register={{ ...register("password") }}
                error={errors.password?.message}
              />
            </div>
              <Button color="primary" size="lg">
                Fazer Login
              </Button>
              <Link to={""}>Criar Conta</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
