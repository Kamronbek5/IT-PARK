import {
  SettingOutlined,
  MessageOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { LanguageContext } from "../context/languageContext";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import UserModal from "./UserModal";

const MenuBar = ({ onFalse }) => {
  const [open, setOpen] = useState(false);

  const { language, setLanguage } = useContext(LanguageContext);
  const handlyChange = (event) => {
    localStorage.setItem("language", event.target.value);
    setLanguage?.(event.target.value);
  };
  return (
    <div className="menuBar">
      <div className="menuBar__icons">
        <select
          defaultValue={language}
          className="header-hat_select"
          onChange={handlyChange}
        >
          <option value="uz">O'zbekcha</option>
          <option value="ru">Русский</option>
          <option value="eng">English</option>
        </select>
        <i>
          <MessageOutlined />
        </i>
        <i>
          <BellOutlined />
        </i>
        <i>
          <SettingOutlined />
        </i>
        <button className="menuBar__profil">
          <button onClick={() => setOpen(true)}>
            <UserOutlined />
          </button>
        </button>
      </div>
      {open &&
        createPortal(
          <UserModal onFalse={onFalse} onCancel={() => setOpen(false)} />,
          document.body
        )}
    </div>
  );
};

export default MenuBar;
