import { Link } from "react-router-dom";
import PageOneLeft from "./PageOneLeft";
import PageOneRight from "./PageOneRight";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import useLanguage from "../../../hooks/useLanguage";


const PageOne = () => {
  const translate = useLanguage()
  const [loading , setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    },3000)
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
        <div className="page-one resp__contain">
        <div className="progress__link">
          <Link to={"/"}>{translate("main")}</Link> /
          <Link to={"/courses"}>{translate("mycou")}</Link>
        </div>
        <div className="page-one__title">
          <h2>{translate("web")}</h2>
        </div>
        <div className="page-one__info">
          <PageOneLeft />
          <div className="page-one__info__right">
            <PageOneRight />
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default PageOne;
