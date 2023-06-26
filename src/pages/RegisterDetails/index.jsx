
import { FormDetails } from "./components/FormDetails/FormDetails";
import { FormDetailsExtra } from "./components/FormDetailsExtra/FormDetailsExtra"
export default function RegisterDetails() {
  return (
    <div className="Register-details-container">
      <a href="/">volver</a>
      <h1>Tus datos</h1>
      <FormDetails />
      <FormDetailsExtra/>
    </div>
  );
}
