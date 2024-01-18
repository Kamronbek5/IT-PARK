import { useEffect, useState } from "react";
import { Spin } from "antd";
import MenuBar from "./components/menuBar";
import Root from "./components/root";

const App = () => {
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
        <Root />
        <MenuBar />
      </div>
      }
    </div>
  );
}

export default App;
