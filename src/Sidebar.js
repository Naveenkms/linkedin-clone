import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const Sidebar = () => {
  const {displayName, email, photourl} = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <p>#{topic}</p>
        </div>
    )
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.pexels.com/photos/7135057/pexels-photo-7135057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <Avatar className="sidebar__avatar" src={photourl}/>
        <h2>{displayName}</h2>
        <h4>{email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2134</p>
        </div>
        <div className="sidebar__stat">
        <p>Views on post</p>
        <p className="sidebar__statNumber">2101</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("react")}
        {recentItem("redux")}
        {recentItem("programming")}
        {recentItem("typescript")}
        {recentItem("softwaredeveloper")}
      </div>
    </div>
  );
};

export default Sidebar;
