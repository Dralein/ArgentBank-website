import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Accounts from "../../data/account.json";
import Account from "../Account";
import Button from "../Button";

const User = () => {
  const username = useSelector((state) => state.login.userProfil.userName);
  const navigate = useNavigate();

  const handleDisplayEdit = (e) => {
    e.preventDefault();
    navigate("/edit-profile");
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back <br /> {username}!
        </h1>
        <Button
          className="edit-button"
          text="Edit Name"
          onClick={handleDisplayEdit}
        />
      </div>
      <h2 className="sr-only">Accounts</h2>
      {Accounts.map((account, index) => (
        <Account
          key={`account-${index}`}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </main>
  );
};

export default User;
