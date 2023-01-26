import "./HeaderOption.css";
import Avatar from '@mui/material/Avatar';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const HeaderOption = ({ Icon, title, avatar, onClick }) => {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={user?.photourl}/>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption