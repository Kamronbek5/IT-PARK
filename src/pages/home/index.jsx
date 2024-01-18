import Header from './components/Header';
import { useEffect, useState } from "react";
import { Spin } from "antd";

const HomePage = () => {
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
        <Header/>
      </div>
      }
    </div>
  );
}

export default HomePage;
