import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { useState, useEffect } from "react";
import EditForm from "./EditForm";
import { useDispatch, useSelector } from "react-redux";
import { getUserDatas } from "../../../../features/authSlice";

export default function MainHeader() {
  const userDatas = useSelector((state) => state.auth.userDatas);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDatas());
  }, []);

  return (
    <div className="header">
      <h1>Welcome back</h1>
      {isEditing ? (
        <EditForm setIsEditing={setIsEditing} />
      ) : (
        <div className="user-initial-container">
          {userDatas && (
            <h1 className="first-last-name">
              {userDatas.firstName} {userDatas.lastName}!
            </h1>
          )}
          <PrimaryButton
            className="edit-button"
            value="Edit Name"
            handleClick={() => setIsEditing(true)}
          />
        </div>
      )}
    </div>
  );
}
