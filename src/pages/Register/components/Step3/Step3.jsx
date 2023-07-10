import { useState } from "react";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { Button } from "../../../../components/Button/Button";
import { Input } from "../../../../components/Inputs/Input";
import { Form } from "../../../../components/Form/Form";
import { BarSteps } from "../BarSteps/BarSteps";
import logo from "../../../../assets/images/logo.png";

export function Step3({ prevStep }) {
  const { setUserData } = useAuthContext();
  const [infoUser, setInfoUSer] = useState({});
  const handleChange = (e) => {
    setInfoUSer({ ...infoUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { telefono, altura, peso } = infoUser;
    setUserData((data) => ({ ...data, telefono, altura, peso }));
  };

  const inputs = [
    <Input
      key={1}
      onChange={handleChange}
      label="Telefono"
      placeholder="Ingrese su telefono..."
      name="telefono"
    />,
  
    <Input
      key={2}
      type="date"
      onChange={handleChange}
      label="Fecha de nacimiento"
      placeholder="Ingrese su fecha de nacimiento..."
      name="fechanacimiento"
    />,
    <Input
      key={3}
      onChange={handleChange}
      type="number"
      label="Altura"
      placeholder="Altura..."
      name="altura"
      littleInput={true}
    />,
    <Input
      key={4}
      onChange={handleChange}
      type="number"
      label="Peso"
      placeholder="Peso..."
      name="peso"
      littleInput={true}
    />,
    
  ];

  const buttons = [
    <Button key={1} className="button-type-1" type="submit">
      Siguiente
    </Button>,
    <Button key={2} className="button-type-2" type="button" onClick={prevStep}>
      Anterior
    </Button>,
  ];
  return (
    <div className="Step3-container">
      <div className="logo-container">
        <img src={logo} alt="logo de tryning" />
        <BarSteps step={3} />
      </div>
      <Form handleSubmit={handleSubmit} inputs={inputs} buttons={buttons} />
    </div>
  );
}