import HeaderComp from './components/HeaderComp';
import { useEffect, useState } from "react";
import { Spin } from "antd";

const CoursesPage = () => {
  const [loading , setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    },2000)
  },[])
  return (
    <div>
      {
        loading ? 
        <div className="Loading">
          <Spin tip="Loading" size="large">
        <div className="content" />
         </Spin>
        </div>
        :
        <div>
        <HeaderComp/>
      </div>
      }
    </div>
  );
}

export default CoursesPage;
