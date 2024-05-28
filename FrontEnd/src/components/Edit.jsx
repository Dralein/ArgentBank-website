import { useState } from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { infoUserName } from "./../redux/loginSlice";
import { changeUsername } from "./../api/api";

const EditName = () => {
  const { userProfil, userToken } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState(userProfil.userName);
  const [showEditName, setShowEditName] = useState(false);

  const handleChangeUserName = (e) => {
    setNewUserName(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateUserName = await changeUsername(newUserName, userToken);
      if (updateUserName.status === 200) {
        dispatch(infoUserName(newUserName));
      }
    } catch (error) {
      error
    }
    setShowEditName(false); // Masquer la section d'édition après avoir sauvegardé
  };

  const handleToggleEditName = () => {
    setShowEditName(!showEditName); // Inverser la valeur de showEditName au clic
  };

  return (
    <>
      {!showEditName && (
        <Button
          text="Edit Name"
          onClick={handleToggleEditName}
          className="edit-button"
        />
      )}
      {showEditName && (
        <section className="sign-in-content editmargin">
          <h1>Edit User info</h1>
          <form onSubmit={handleFormSubmit}>
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
            <Button text="Save" type="submit" className="sign-in-button" />
          </form>
          <Button
            text="Cancel"
            onClick={handleToggleEditName}
            className="sign-in-button"
          />
        </section>
      )}
    </>
  );
};

export default EditName;