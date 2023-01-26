import "./Header.css"

import HeaderOption from "./HeaderOption";

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { getAuth, signOut } from "firebase/auth";

import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { useState } from "react";

const Header = () => {
    const [search, setSearch] = useState();
    const dispatch = useDispatch();
    const auth = getAuth();
    const datas = [ 
        {icon: HomeIcon, title: "Home"}, 
        {icon: GroupIcon, title: "My Network"}, 
        {icon: HomeRepairServiceIcon, title: "Jobs"}, 
        {icon: ChatIcon, title: "Messaging"}, 
        {icon: NotificationsIcon, title: "Notificatinons"} 
    ];

    const logoutApp = () => {
        signOut(auth).then(() => {
            dispatch(logout());
          }).catch((error) => {
          console.log(error);
          });

    }
  return (
    <div className="header">

        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="linkedin logo" />

            <div className="header__search">
                <SearchIcon />
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search" />
            </div>
        </div>

        <div className="header__right">
            {datas.map(({icon, title}, index) => (
                <HeaderOption Icon={icon} title={title} key={index} />
            ))}

            <HeaderOption avatar={true} title="me" onClick={logoutApp}/>
        </div>

    </div>
  ) 
}

export default Header