import {Link} from 'react-router-dom'
import Degree from '../../../assets/icons/degree'
import Arrow from '../../../assets/icons/arrow'
import Clock from '../../../assets/icons/clock'
import { Progress, Space } from 'antd';
const Profilright = () => {
  return (
    <div className="profilright">
      <div className="profilright__courses">
      <Link to='/courses' className="profilright__courses__comp">
      <Degree/>
      <div className="profilright__courses__texts">
        <h1 className="profilright__courses__text1">100</h1>
        <h1 className="profilright__courses__text2">Courses Completed</h1>
      </div>
      <i className="profilright__courses__icon2"><Arrow/></i>
      </Link>
      <Link to='/courses' className="profilright__courses__prog">
      <Clock/>
      <div className="profilright__courses__texts">
        <h1 className="profilright__courses__text1">34</h1>
        <h1 className="profilright__courses__text2">Courses In Progress</h1>
      </div>
      <i className="profilright__courses__icon2"><Arrow/></i>
      </Link>
      </div>
      <div className="profilright__current">
        <div className="profilright__current__UI">
    <Space wrap>
      <Progress strokeLinecap="butt" type="circle" percent={80} />
    </Space>
        </div>
        <div className="profilright__current__UX">
        <Space wrap>
      <Progress strokeLinecap="butt" type="circle" percent={62} />
    </Space>
        </div>
      </div>
    </div>
  )
}

export default Profilright