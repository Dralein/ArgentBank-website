import { useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { infoUserName } from "../../redux/loginSlice";
import { changeUsername } from "../../api/api";

const EditName = () => {
  const navigate = useNavigate();
  const loginStore = useSelector((state) => state.login);
  const { userProfil, userToken } = loginStore;
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState(userProfil.userName);

  const handleChangeUserName = (e) => {
    setNewUserName(e.target.value);
  };

  const handleCancel = () => {
    navigate("/edit-profile");
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const updateUserName = await changeUsername(newUserName, userToken);
      if (updateUserName.status === 200) {
        dispatch(infoUserName(newUserName));
        console.log("Le nom d'utilisateur a bien été modifié.", updateUserName.status);
      } else {
        console.error("La mise à jour du nom d'utilisateur a échoué.");
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la mise à jour du nom d'utilisateur :", error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content toogle-edit-name">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Edit User info</h1>
        <form onSubmit={handleForm} onClick={(event) => event.stopPropagation()}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              value={newUserName}
              onChange={handleChangeUserName}
              type="text"
              id="username"
              placeholder="Tapez votre username"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              disabled
              value={userProfil.firstName}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              disabled
              value={userProfil.lastName}
            />
          </div>
          <Button text={"Save"} className={"sign-in-button"}/>
        </form>
        <Button  text={"Cancel"} onClick={handleCancel} className={"sign-in-button"}/>
      </section>
    </main>
  );
};

export default EditName;
