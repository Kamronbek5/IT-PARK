import Course1 from "./components/Course1";
import Course2 from "./components/Course2";
import { useEffect, useState } from "react";
import { Spin } from "antd";

const PaymentsPage = () => {
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
        <Course1/>
        <Course2/>
      </div>
      }
    </div>
  );
}

export default PaymentsPage;
