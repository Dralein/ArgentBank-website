
import { useSelector } from "react-redux";
import Accounts from "../../data/account.json";
import Account from "../Account";
import EditName from "../Edit";

const User = () => {
  const username = useSelector((state) => state.login.userProfil.userName);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back <br /> {username}!
        </h1>
        <EditName/>
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
