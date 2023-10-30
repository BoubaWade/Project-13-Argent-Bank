import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setisLogged } from "../../../features/authSlice";

export default function NavItem() {
  const { userDatas, isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(setisLogged(false));
  };

  return (
    <>
      {isLogged ? (
        <div className="main-nav-item">
          <Link to={"/profile"}>
            <i className="fa fa-user-circle"></i>
            {userDatas && userDatas.firstName}
          </Link>
          <Link to={"/"}>
            <i className="fa fa-sign-out"></i>
            <span onClick={logOut}>Sign Out</span>
          </Link>
        </div>
      ) : (
        <div className="main-nav-item">
          <Link to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </>
  );
}
