import { AccountCircleOutlined, CreditCard, Dashboard, ExitToApp, InsertChart, LocalShipping, NotificationsNone, PersonOutline, PsychologyOutlined, SettingsApplications, SettingsSystemDaydreamOutlined, Store } from '@mui/icons-material'
import './sidebar.scss';
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to='/'>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users">
            <li>
              <PersonOutline className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <Store className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCard className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplications className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar