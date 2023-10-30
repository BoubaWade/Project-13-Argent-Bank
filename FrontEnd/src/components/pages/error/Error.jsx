import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="page-error-container">
      <h1 className="title-error-page">☠️ Page introuvable ☠️ </h1>
      <div className="buttons-error-container">
        <PrimaryButton
          className="error-page-button"
          value="Page accueil"
          handleClick={() => navigate("/")}
        />
        <PrimaryButton
          className="error-page-button"
          value="Page connexion"
          handleClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
}
