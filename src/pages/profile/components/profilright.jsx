import {Link} from 'react-router-dom'
import Degree from '../../../assets/icons/degree'
import Arrow from '../../../assets/icons/arrow'
const Profilright = () => {
  return (
    <div className="profilright">
      <div className="profilright__courses">
      <Link to='/courses' className="profilright__courses__comp">
        <i className="profilright__courses__icon"><Degree/></i>
      <div className="profilright__courses__texts">
        <h1 className="profilright__courses__text1">100</h1>
        <h1 className="profilright__courses__text2">Courses Completed</h1>
      </div>
      <i className="profilright__courses__icon2"><Arrow/></i>
      </Link>
      <Link to='/courses' className="profilright__courses__prog">
      <i className="profilright__courses__icon"><Degree/></i>
      <div className="profilright__courses__texts">
        <h1 className="profilright__courses__text1">100</h1>
        <h1 className="profilright__courses__text2">Courses Completed</h1>
      </div>
      <i className="profilright__courses__icon2"><Arrow/></i>
      </Link>
      </div>
    </div>
  )
}

export default Profilright