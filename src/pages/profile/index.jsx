import Profileft from "./components/profilleft";
import Profilright from "./components/profilright";
import { useEffect, useState } from "react";
import { Spin } from "antd";

const ProfilePage = () => {
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
        <div className="profilcontain profil resp__contain">
        <Profileft/>
        <Profilright/>
      </div>
      }
    </div>
  );
}

export default ProfilePage;


