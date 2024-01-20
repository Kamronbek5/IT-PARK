import { MoreOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import CollepsComp from "./colleps/CollepsComp";
import useLanguage from "../../../hooks/useLanguage";

const PageOneRight = () => {
  const translate = useLanguage()
  return (
    <div className="pageone-right">
      <div className="pageone-right__card">
        <div className="pageone-right__card__title">
          <h2>{translate("jar")}</h2>
          <i>
            <MoreOutlined />
          </i>
        </div>
        <div className="pageone-right__card__progress">
          <Progress percent={20} size={[300, 17]} />
        </div>
        <div className="pageone-right__card__text">
          <p>{translate("web")}</p>
          <span>10/110</span>
        </div>
      </div>
      <div className="colleps-comp">
        <CollepsComp />
      </div>
    </div>
  );
};

export default PageOneRight;
