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
import {
    AppstoreOutlined,
    CalendarOutlined,
    DollarOutlined,
    FolderOpenOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const MenuBar = () => {
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
      const [isActive1, setIsActive1] = useState(true);
      const [isActive2, setIsActive2] = useState(false);
      const [isActive3, setIsActive3] = useState(false);
      const [isActive4, setIsActive4] = useState(false);
      const [isActive5, setIsActive5] = useState(false);

      const clicked1 = () => {
          setIsActive1(true) &
              setIsActive2(false) &
              setIsActive3(false) &
              setIsActive4(false) &
              setIsActive5(false);
      };
      const clicked2 = () => {
          setIsActive1(false) &
              setIsActive2(true) &
              setIsActive3(false) &
              setIsActive4(false) &
              setIsActive5(false);
      };
      const clicked3 = () => {
          setIsActive1(false) &
              setIsActive2(false) &
              setIsActive3(true) &
              setIsActive4(false) &
              setIsActive5(false);
      };
      const clicked4 = () => {
          setIsActive1(false) &
              setIsActive2(false) &
              setIsActive3(false) &
              setIsActive4(true) &
              setIsActive5(false);
      };
      const clicked5 = () => {
          setIsActive1(false) &
              setIsActive2(false) &
              setIsActive3(false) &
              setIsActive4(false) &
              setIsActive5(true);
      };
    return (
        <div className='menuBar'>
            <button className='opendrawer' onClick={showDrawer}>
                <MenuOutlined />
            </button>
            <div className='menuBar__icons'>
                <Drawer
                    title={<img src={RootLogo} className='drawerlogo' />}
                    onClose={onClose}
                    placement='left'
                    width='80%'
                    closable={false}
                    open={opend}>
                    <div className='root__menu'>
                        <Link
                            onClick={() => onClose() & clicked1()}
                            style={{
                                background: isActive1 ? "#166199" : "",
                                color: isActive1 ? "#fff" : "",
                                boxShadow: isActive1
                                    ? "0px 20px 50px 0px rgba(55, 69, 87, 0.1)"
                                    : "",
                            }}
                            to='/'
                            className='root__item'>
                            <i className='root__item__icon'>
                                <AppstoreOutlined />
                            </i>
                            <h3 className='root__item__title'>Bosh sahifa</h3>
                        </Link>
                        <Link
                            style={{
                                background: isActive2 ? "#166199" : "",
                                color: isActive2 ? "#fff" : "",
                                boxShadow: isActive2
                                    ? "0px 20px 50px 0px rgba(55, 69, 87, 0.1)"
                                    : "",
                            }}
                            onClick={() => onClose() & clicked2()}
                            to='/courses'
                            className='root__item'>
                            <i className='root__item__icon'>
                                <FolderOpenOutlined />
                            </i>
                            <h3 className='root__item__title'>
                                Mening kurslarim
                            </h3>
                        </Link>
                        <Link
                            style={{
                                background: isActive3 ? "#166199" : "",
                                color: isActive3 ? "#fff" : "",
                                boxShadow: isActive3
                                    ? "0px 20px 50px 0px rgba(55, 69, 87, 0.1)"
                                    : "",
                            }}
                            onClick={() => onClose() & clicked3()}
                            to='/table'
                            className='root__item'>
                            <i className='root__item__icon'>
                                <CalendarOutlined />
                            </i>
                            <h3 className='root__item__title'>Dars jadvali</h3>
                        </Link>
                        <Link
                            style={{
                                background: isActive4 ? "#166199" : "",
                                color: isActive4 ? "#fff" : "",
                                boxShadow: isActive4
                                    ? "0px 20px 50px 0px rgba(55, 69, 87, 0.1)"
                                    : "",
                            }}
                            onClick={() => onClose() & clicked4()}
                            to='/profile'
                            className='root__item'>
                            <i className='root__item__icon'>
                                <UserOutlined />
                            </i>
                            <h3 className='root__item__title'>Profil</h3>
                        </Link>
                        <Link
                            style={{
                                background: isActive5 ? "#166199" : "",
                                color: isActive5 ? "#fff" : "",
                                boxShadow: isActive5
                                    ? "0px 20px 50px 0px rgba(55, 69, 87, 0.1)"
                                    : "",
                            }}
                            onClick={() => onClose() & clicked5()}
                            to='/payments'
                            className='root__item'>
                            <i className='root__item__icon'>
                                <DollarOutlined />
                            </i>
                            <h3 className='root__item__title'>
                                Mening to’lovlarim
                            </h3>
                        </Link>
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
                    <UserModal onCancel={() => setOpen(false)} />,
                    document.body
                )}
        </div>
    );
};

export default MenuBar;
