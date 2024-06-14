import { UserDataProfile } from "../App";
import { useContext } from "react";
function AppHeader() {
  const name = useContext(UserDataProfile);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {name.user.username}</h2>
    </div>
  );
}

export default AppHeader;
