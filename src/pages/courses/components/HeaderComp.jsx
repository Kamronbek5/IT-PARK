import Finished from "./Finished";
import ProgressComp from "./Progress";
import { Link } from "react-router-dom";
import useLanguage from "../../../hooks/useLanguage";

const HeaderComp = () => {
  const translate = useLanguage()
  return (
      <div className='header__comp resp__contain'>
          <div className='progress__link'>
              <Link to={"/"}>{translate("main")}</Link> /
          </div>
          <ProgressComp />
          <Finished />
      </div>
  );
};

export default HeaderComp;
