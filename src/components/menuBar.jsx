import {
  SettingOutlined,
  MessageOutlined,
  BellOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { LanguageContext } from "../context/languageContext";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import UserModal from "./UserModal";
import { Drawer } from "antd";
import RootLogo from "../assets/image/rootIcon.png";
import rootList from "../utils/rootList";
import { Link } from "react-router-dom";

const MenuBar = ({ onFalse }) => {
  const [open, setOpen] = useState(false);

  const { language, setLanguage } = useContext(LanguageContext);
  const handlyChange = (event) => {
    localStorage.setItem("language", event.target.value);
    setLanguage?.(event.target.value);
  };
  const [opend, setOpend] = useState(false);
  const showDrawer = () => {
      setOpend(true);
  };
  const onClose = () => {
      setOpend(false);
  };
  return (
      <div className='menuBar'>
          <button className='opendrawer' onClick={showDrawer}>
              <MenuOutlined />
          </button>
          <div className='menuBar__icons'>
              <Drawer
                  title={
                      <img
                          src={RootLogo}
                          className="drawerlogo"
                          alt=''
                      />
                  }
                  onClose={onClose}
                  placement='left'
                  width='80%'
                  open={opend}>
                  <div className='root__menu'>
                      {rootList.map((item) => (
                          <Link
                              to={item.path}
                              className='root__item'
                              key={item.id}>
                              <i className='root__item__icon'>{item.icon}</i>
                              <h3 className='root__item__title'>
                                  {item.title}
                              </h3>
                          </Link>
                      ))}
                  </div>
              </Drawer>
              <select
                  defaultValue={language}
                  className='header-hat_select'
                  onChange={handlyChange}>
                  <option value='uz'>Uz</option>
                  <option value='ru'>Рус</option>
                  <option value='eng'>Eng</option>
              </select>
              <i className='menuicons'>
                  <MessageOutlined />
              </i>
              <i className='menuicons'>
                  <BellOutlined />
              </i>
              <i className='menuicons'>
                  <SettingOutlined />
              </i>
              <button className='menuBar__profil'>
                  <button onClick={() => setOpen(true)}>
                      <UserOutlined />
                  </button>
              </button>
          </div>
          {open &&
              createPortal(
                  <UserModal
                      onFalse={onFalse}
                      onCancel={() => setOpen(false)}
                  />,
                  document.body
              )}
      </div>
  );
};

export default MenuBar;
