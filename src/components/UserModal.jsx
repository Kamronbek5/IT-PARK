import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/languageContext";
import { BellOutlined, MessageOutlined, SettingOutlined } from "@ant-design/icons";

const UserModal = ({ onCancel, onFalse}) => {
    const { language, setLanguage } = useContext(LanguageContext);
const handlyChange = (event) => {
  localStorage.setItem("language", event.target.value);
  setLanguage?.(event.target.value);
};
    return (
        <div className='modal-out' onClick={() => onCancel()}>
            <div className='user-modal' onClick={(e) => e.stopPropagation()}>
                <div className='user-modal__logo'></div>
                <div className='user-modal__desc'>
                    <h3>Abbos va Kamronbek</h3>
                </div>
                <select
                    defaultValue={language}
                    className='modallang'
                    onChange={handlyChange}>
                    <option value='uz'>Uz</option>
                    <option value='ru'>Рус</option>
                    <option value='eng'>Eng</option>
                </select>
                <i className='modalicons'>
                    <MessageOutlined />
                </i>
                <i className='modalicons'>
                    <BellOutlined />
                </i>
                <i className='modalicons'>
                    <SettingOutlined />
                </i>
                <div onClick={() => onFalse()} className='user-modal__btn'>
                    <Link className='Link'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default UserModal;
