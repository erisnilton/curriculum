import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { Input } from "../input";
import "./styles.scss";

export const InputPassword: React.FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input__password">
      <Input
        label="Senha"
        name="password"
        type={showPassword ? "text" : "password"}
      >
        <div
          className="input__password--icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </div>
      </Input>
    </div>
  );
};

export default InputPassword;
