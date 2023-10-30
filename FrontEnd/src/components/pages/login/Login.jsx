import NavBar from "../../reusable-ui/navBar/NavBar";
import MainLogin from "./main/MainLogin";
import Footer from "../../reusable-ui/Footer";

export default function Login() {
  return (
    <div className="login-page">
      <NavBar />
      <MainLogin />
      <Footer />
    </div>
  );
}
