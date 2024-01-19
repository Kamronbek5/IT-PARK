import React from "react";
import { Link } from "react-router-dom";
import PageOneLeft from "./PageOneLeft";
import PageOneRight from "./PageOneRight";
import { useEffect, useState } from "react";
import { Spin } from "antd";

const PageOne = () => {
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
        <div className="page-one">
        <div className="progress__link">
          <Link to={"/"}>Bosh sahifa</Link> /
          <Link to={"/courses"}>Mening kurslarim</Link>
        </div>
        <div className="page-one__title">
          <h2>Web va grafik dizayn</h2>
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
