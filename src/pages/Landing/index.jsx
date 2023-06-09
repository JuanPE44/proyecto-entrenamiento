import { useAuthContext } from "../../hooks/useAuthContext";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
export default function Landing() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div className="Landing-container">
      <div className="logo">
        <img src={logo} alt="imagen logo Tryning" />
      </div>
      <div className="buttons-container">
        <Link to="/login" className="button-login">
          Iniciar sesion
        </Link>
        <Link to="/register" className="button-register">
          Registrarse
        </Link>
      </div>
    </div>
  );
}
