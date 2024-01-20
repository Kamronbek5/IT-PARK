import {
    CalendarOutlined,
    ClockCircleOutlined 
  } from "@ant-design/icons";
import useLanguage from "../../../hooks/useLanguage";
const Tableright = () => {
    const translate = useLanguage()
  return (
    <div className="tableright">
        <div className="week">
        <h1 className="tableright__title">{translate("week")}</h1>
            <div className="week__day">
            <h1 className="week__title">{translate("sesh")}</h1>
            <span className="day1">{translate("web")}</span>
            </div>
            <div className="week__day">
            <h1 className="week__title">{translate("pay")}</h1>
            <span className="day2">SMM</span>
            </div>
            <div className="week__day">
            <h1 className="week__title">{translate("shan")}</h1>
            <span className="day">{translate("das")}</span>
            </div>
            <div className="week__day">
            <h1 className="week__title">{translate("sesh")}</h1>
            <span className="day1">{translate("web")}</span>
            </div>
            <div className="week__day">
            <h1 className="week__title">{translate("pay")}</h1>
            <span className="day2">SMM</span>
            </div>
            <div className="week__day">
            <h1 className="week__title">{translate("shan")}</h1>
            <span className="day">{translate("das")}</span>
            </div>
        </div>
        <div className="courses">
            <h1 className="courses__title">{translate("bar")}</h1>
            <div className="course">
                <h1 className="course__title">{translate("das")}</h1>
                <div className="course__date__parent"><div className="course__date"><i className="course__date__icon"><CalendarOutlined /> </i><span className="course__date__name">Yanvar 5, 2021</span></div>
                <div className="px"></div>
                <div className="course__date"><i className="course__date__icon"><ClockCircleOutlined /> </i> <span className="course__date__name">09.00 - 10.00</span></div></div>
                <div className="course__profil">
                    <div className="course__icon"></div>
                    <h1 className="course__name">Humoyun Madraximov</h1>
                </div>
            </div>
            <div className="course">
                <h1 className="course__title">{translate("web")}</h1>
                <div className="course__date__parent"><div className="course__date"><i className="course__date__icon"><CalendarOutlined /> </i><span className="course__date__name">Yanvar 5, 2021</span></div>
                <div className="px"></div>
                <div className="course__date"><i className="course__date__icon"><ClockCircleOutlined /> </i><span className="course__date__name">09.00 - 10.00</span></div></div>
                <div className="course__profil">
                    <div className="course__icon"></div>
                    <h1 className="course__name">Humoyun Madraximov</h1>
                </div>
            </div>
            <div className="course">
                <h1 className="course__title">SMM</h1>
                <div className="course__date__parent"><div className="course__date"><i className="course__date__icon"><CalendarOutlined /> </i><span className="course__date__name">Yanvar 5, 2021</span></div>
                <div className="px"></div>
                <div className="course__date"><i className="course__date__icon"><ClockCircleOutlined /> </i><span className="course__date__name">09.00 - 10.00</span></div></div>
                <div className="course__profil">
                    <div className="course__icon"></div>
                    <h1 className="course__name">Humoyun Madraximov</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tableright