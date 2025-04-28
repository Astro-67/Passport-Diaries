import styles from "./User.module.css";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

export default function User() {
    const {user,logout} = useAuth();
    const navigate = useNavigate();

    function handleClick(e) {
        e.preventDefault();
        logout();
        navigate("/");
    }

  return (
    <div className={styles.user}>
        <img src={user.avatar} alt={user.name} />
        <span>Welcome {user.name}</span>
        <button onClick={handleClick}>LOGOUT</button>
    </div>
  )
}
