
import Star from "../../../assets/icons/star";
import { Link } from "react-router-dom";

import {
  FolderOpenOutlined,
  PlayCircleOutlined 
} from "@ant-design/icons";
import Course1Img from "../../../assets/image/Course";
import useLanguage from "../../../hooks/useLanguage";

const Course1 = () => {
  const translate = useLanguage()
  return (
    <div className="Course1 contain">
      <div className="Course1__left">
       <div className="Course1img__parent"><i className="Course1img"><Course1Img/></i></div>
       <div className="Course1__info">
       <div className="Course1__info__left">
       <h3 className="Course1__info__name">{translate("web")}</h3>
       <p className="Course1__info__shop">Karen Hope   5.0 <Star/></p>
       <p className="Course1__info__book"><FolderOpenOutlined />  110+ Kontent</p>
       </div>
       <div className="Course1__info__right">
       <p className="Course1__info__cost">2 100 000</p>
       <p className="Course1__info__sum">sum</p>
       <Link to="/page-one" className="Course1__info__link">{translate('taf')}</Link>
       </div>
       </div>
      </div>
      <div className="Course1__right">
        <p className="Course1__info__text">{translate('tim4')}</p>
        <div className="Course1__list">
        <div className="Course1__success"><i className="Course__success__icon"><PlayCircleOutlined/></i>
        <p className="Course1__success__title">{translate("cpay1")}</p>
        <button className="Course1__success__button">{translate("payed")}</button>
          </div>   
        <div className="Course1__success"><i className="Course__success__icon"><PlayCircleOutlined/></i>
        <p className="Course1__success__title">{translate("cpay2")}</p>
        <button className="Course1__success__button">{translate("payed")}</button>
          </div>    
        <div className="Course1__nosuccess"><i className="Course__nosuccess__icon"><PlayCircleOutlined/></i>
        <p className="Course1__success__title">{translate("cpay3")}</p>
        <button className="Course1__nosuccess__button">{translate("nopayed")}</button>
          </div>   
        <div className="Course1__nosuccess"><i className="Course__nosuccess__icon"><PlayCircleOutlined/></i>
        <p className="Course1__success__title">{translate("cpay4")}</p>
        <button className="Course1__nosuccess__button">{translate("nopayed")}</button>
          </div>    
        </div> 
      </div>
    </div>
  )
}

export default Course1