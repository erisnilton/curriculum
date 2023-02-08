import React, {useEffect} from "react";
import SideBar from "../../components/sidebar";
import { Outlet , redirect, useNavigate} from "react-router-dom";
const Register: React.FunctionComponent = () => {

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register";
   navigate('/register/about')

  }, []);
  return (
    <div className="d-flex">
      
      <SideBar />
      <div style={{ padding: "1rem", width: "100%", marginLeft: "18.75rem" }}>
       <Outlet />
      </div>
    </div>
  );
};

export default Register;