import {
    CalendarOutlined,
    ClockCircleOutlined 
  } from "@ant-design/icons";
const Tableright = () => {
  return (
    <div className="tableright">
        <div className="week">
        <h1 className="tableright__title">Bu haftada</h1>
            <div className="week__day">
            <h1 className="week__title">Sesh</h1>
            <span className="day1">Web va grafik dizayn</span>
            </div>
            <div className="week__day">
            <h1 className="week__title">Pay</h1>
            <span className="day2">SMM</span>
            </div>
            <div className="week__day">
            <h1 className="week__title">Shan</h1>
            <span className="day">Web dasturlash</span>
            </div>
            <div className="week__day">
            <h1 className="week__title">Sesh</h1>
            <span className="day1">Web va grafik dizayn</span>
            </div>
            <div className="week__day">
            <h1 className="week__title">Pay</h1>
            <span className="day2">SMM</span>
            </div>
            <div className="week__day">
            <h1 className="week__title">Shan</h1>
            <span className="day">Web dasturlash</span>
            </div>
        </div>
        <div className="courses">
            <h1 className="courses__title">Barcha kurslarimni ro’yxati</h1>
            <div className="course">
                <h1 className="course__title">Web dasturlash</h1>
                <div className="course__date__parent"><div className="course__date"><i className="course__date__icon"><CalendarOutlined /> </i><span className="course__date__name">Yanvar 5, 2021</span></div>
                <div className="px"></div>
                <div className="course__date"><i className="course__date__icon"><ClockCircleOutlined /> </i> <span className="course__date__name">09.00 - 10.00</span></div></div>
                <div className="course__profil">
                    <div className="course__icon"></div>
                    <h1 className="course__name">Humoyun Madraximov</h1>
                </div>
            </div>
            <div className="course">
                <h1 className="course__title">Web va grafik dizayn</h1>
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