import {
  SettingOutlined,
  MessageOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { LanguageContext } from "../context/languageContext";
import { useContext } from "react";

const MenuBar = () => {
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
                        className='header-hat_select'
                        onChange={handlyChange}>
                        <option value='uz'>O'zbekcha</option>
                        <option value='ru'>Русский</option>
                        <option value='eng'>English</option>
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
          <UserOutlined />
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
