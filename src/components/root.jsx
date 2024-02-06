import RootLogo from "../assets/image/rootIcon.png";
import { Route, Routes, Link } from "react-router-dom";
import CoursesPage from "../pages/courses";
import ProfilePage from "../pages/profile";
import TablePage from "../pages/table"
import PaymentsPage from "../pages/payments"
import PageOne from "../pages/courses/components/PageOne";
import HomePage from "../pages/home";
import { AppstoreOutlined, CalendarOutlined, DollarOutlined, FolderOpenOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

const Root = () => {
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
      setIsActive4(false)&
    setIsActive5(false);
  };
  const clicked3 = () => {
      setIsActive1(false) &
          setIsActive2(false) &
          setIsActive3(true) &
      setIsActive4(false)&
    setIsActive5(false);
  };
  const clicked4 = () => {
      setIsActive1(false) &
          setIsActive2(false) &
          setIsActive3(false) &
      setIsActive4(true)&
    setIsActive5(false);
  };
  const clicked5 = () => {
      setIsActive1(false) &
          setIsActive2(false) &
          setIsActive3(false) &
      setIsActive4(false)&
    setIsActive5(true);
  };
  return (
      <>
          <div className='root__left'>
              <div className='root__left__logo'>
                  <img src={RootLogo} alt='' />
              </div>
              <div className='root__menu'>
                  <Link
                      onClick={clicked1}
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
                      onClick={clicked2}
                      to='/courses'
                      className='root__item'>
                      <i className='root__item__icon'>
                          <FolderOpenOutlined />
                      </i>
                      <h3 className='root__item__title'>Mening kurslarim</h3>
                  </Link>
                  <Link
                      style={{
                          background: isActive3 ? "#166199" : "",
                          color: isActive3 ? "#fff" : "",
                          boxShadow: isActive3
                              ? "0px 20px 50px 0px rgba(55, 69, 87, 0.1)"
                              : "",
                      }}
                      onClick={clicked3}
                      to='/table'
                      className='root__item'>
                      <i className='root__item__icon'>
                          <CalendarOutlined />
                      </i>
                      <h3 className='root__item__title'>Mening kurslarim</h3>
                  </Link>
                  <Link
                      style={{
                          background: isActive4 ? "#166199" : "",
                          color: isActive4 ? "#fff" : "",
                          boxShadow: isActive4
                              ? "0px 20px 50px 0px rgba(55, 69, 87, 0.1)"
                              : "",
                      }}
                      onClick={clicked4}
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
                      onClick={clicked5}
                      to='/payments'
                      className='root__item'>
                      <i className='root__item__icon'>
                          <DollarOutlined />
                      </i>
                      <h3 className='root__item__title'>Mening to’lovlarim</h3>
                  </Link>
              </div>
          </div>
          <div className='routes'>
              <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/courses' element={<CoursesPage />} />
                  <Route path='/table' element={<TablePage />} />
                  <Route path='/profile' element={<ProfilePage />} />
                  <Route path='/page-one' element={<PageOne />} />
                  <Route path='/payments' element={<PaymentsPage />} />
              </Routes>
          </div>
      </>
  );
};

export default Root;
