import { useSelector } from "react-redux";
import Accounts from "../../data/account.json";
import Account from "../Account";
import EditName from "../Edit";


const User = () => {
  const { userProfil, loading } = useSelector((state) => state.login);

  if (loading) {

    return <div>Loading...</div>; // Render a loading indicator or a fallback message

  }

  return (
    <main className="main bg-dark">
      <div className="header">
      <h1>Welcome back <br /> {userProfil.userName}!</h1>
      </div>
      <EditName />
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
