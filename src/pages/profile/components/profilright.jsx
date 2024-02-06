import {Link} from 'react-router-dom'
import Degree from '../../../assets/icons/degree'
import Arrow from '../../../assets/icons/arrow'
import Clock from '../../../assets/icons/clock'
import { Progress, Space } from 'antd';
import useLanguage from "../../../hooks/useLanguage";

const Profilright = () => {
  const translate = useLanguage()
  return (
      <div className='profilright'>
          <div className='profilright__courses'>
              <Link to='/courses' className='profilright__courses__comp'>
                  <Degree />
                  <div className='profilright__courses__texts'>
                      <h1 className='profilright__courses__text1'>100</h1>
                      <h1 className='profilright__courses__text2'>
                          {translate("kurs")}
                      </h1>
                  </div>
                  <i className='profilright__courses__icon2'>
                      <Arrow />
                  </i>
              </Link>
              <Link to='/courses' className='profilright__courses__prog'>
                  <Clock />
                  <div className='profilright__courses__texts'>
                      <h1 className='profilright__courses__text1'>34</h1>
                      <h1 className='profilright__courses__text2'>
                          {translate("prog")}
                      </h1>
                  </div>
                  <i className='profilright__courses__icon2'>
                      <Arrow />
                  </i>
              </Link>
          </div>
          <div className='profilright__current'>
              <div className='profilright__current__UI'>
                  <Space wrap>
                      <Progress
                          width={105}
                          strokeLinecap='butt'
                          type='circle'
                          percent={80}
                      />
                  </Space>
                  <div className='profilright__current__UI__right'>
                      <h1 className='profilright__current__UI__right__title'>
                          UI Design Beginner
                      </h1>
                      <p className='profilright__current__UI__right__text'>
                          {translate("kurslar")}
                      </p>
                      <h1 className='profilright__current__UI__right__title'>
                          90 / 110
                      </h1>
                  </div>
              </div>
              <div className='profilright__current__UI'>
                  <Space wrap>
                      <Progress
                          width={105}
                          strokeLinecap='butt'
                          type='circle'
                          percent={62}
                      />
                  </Space>
                  <div className='profilright__current__UI__right'>
                      <h1 className='profilright__current__UI__right__title'>
                          UX Research
                      </h1>
                      <p className='profilright__current__UI__right__text'>
                          {translate("kurslar")}
                      </p>
                      <h1 className='profilright__current__UI__right__title'>
                          50 / 80
                      </h1>
                  </div>
              </div>
          </div>
          <div className='Prog'>
              <div className='Prog__title'>{translate("progr")}</div>
              <Progress width={"500px"} percent={30} />
              <Progress percent={50} status='active' />
              <Progress percent={70} status='exception' />
              <Progress percent={100} />
              <Progress percent={30} />
              <Progress percent={50} status='active' />
              <Progress percent={70} status='exception' />
              <Progress percent={100} />
              <Progress percent={30} />
              <Progress percent={50} status='active' />
              <Progress percent={70} status='exception' />
              <Progress percent={100} />
          </div>
      </div>
  );
}

export default Profilright