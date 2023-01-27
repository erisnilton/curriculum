import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./styles.scss";
import Button from "../button";

import { Link, useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    setEmail(email);
    setPassword(password);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="container__left">
        <h1>Faça Seu Login</h1>
      </div>

      <div className="container__right">
        <div className="container__right-login">
          <h1>Faça Seu Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              autoFocus
            />
            {errors.email && <span>O Campo Email é Obrigatório!</span>}
            <input
              type={"password"}
              {...register("password", { required: true })}
              placeholder="Senha"
            />
            {errors.password && <span>O Campo senha é Obrigatório!</span>}
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
