import { useEffect, useRef } from "react";
import Input from "../../../reusable-ui/Input";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../Api/service";
import { useDispatch, useSelector } from "react-redux";
import { setRememberMe } from "../../../../features/authSlice";
import {
  deleteLoginCredentials,
  getLocalStorageValues,
  saveLoginCredentials,
} from "../../../../utils/utilities";

export default function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const rememberMe = useSelector((state) => state.auth.rememberMe);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }).then(() => navigate("/profile"));

    if (rememberMe) {
      saveLoginCredentials(emailRef.current.value, passwordRef.current.value);
    } else {
      deleteLoginCredentials();
    }
  };

  useEffect(() => {
    const rememberMeValue = localStorage.getItem("rememberMe");
    const { rememberedEmail, rememberedPassword } = getLocalStorageValues([
      "rememberedEmail",
      "rememberedPassword",
    ]);

    if (rememberMeValue === "true" && rememberedEmail && rememberedPassword) {
      dispatch(setRememberMe(true));
      emailRef.current.value = rememberedEmail;
      passwordRef.current.value = rememberedPassword;
    }
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        className="input-wrapper"
        label="Username"
        htmlFor="username"
        id="username"
        reference={emailRef}
      />
      <Input
        type="password"
        className="input-wrapper"
        label="Password"
        htmlFor="password"
        id="password"
        reference={passwordRef}
      />
      <div className="input-remember">
        <label htmlFor="remember-me">Remember me</label>
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={() => dispatch(setRememberMe(!rememberMe))}
        />
      </div>
      <PrimaryButton className="sign-in-button" value="Sign In" />
    </form>
  );
}
