import {progress2} from '../../../utils/tableData'
import { Link } from "react-router-dom";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import CoursesIcon1 from "../../../assets/image/coursesIcon1.png";
import { Progress } from 'antd';
import useLanguage from '../../../hooks/useLanguage';

const ProgressComp2 = () => {
  const translate = useLanguage()
  return (
    <div className="progress">
      <div className="progress__cards">
        {progress2.map((item) => (
          <Link to={"/page-one"} key={item.id}>
            <div className="progress__card">
              <div className="card__title">
                <h2>{item.title}</h2>
              </div>
              <div className="card__info">
                <div className="card__info__date">
                  <i>
                    <CalendarOutlined />
                  </i>
                  <p>{item.date}</p>
                </div>
                <div className="card__info__time">
                  <i>
                    <ClockCircleOutlined />
                  </i>
                  <p>{item.time}</p>
                </div>
              </div>
              <div className="card__range">
              <Progress percent={40} size={[342, 15]}/>
              </div>
              <div className="card__progresses">
                <div className="card__progres">
                  <i>
                    <LoadingOutlined />
                  </i>
                  <p>{translate("jar")}</p>
                </div>
                <div className="card__rangeNumber">
                  <p>4/10</p>
                </div>
              </div>
              <div className="card__profil">
                <img src={item.logo} alt="" />
                <p>{item.name}</p>
              </div>
              <div className="progress__image">
                <img src={CoursesIcon1} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProgressComp2;