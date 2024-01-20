import PageLeftTabs from "./Tabs/PageLeftTabs";
import useLanguage from "../../../hooks/useLanguage";

const PageOneLeft = () => {
  const translate = useLanguage()
  return (
    <div className="page-one__left">
      <div className="page-one__left__video">
        <iframe
          width="800"
          height="422"
          src="https://www.youtube.com/embed/dt9DqqIOCi8"
          title="#1 WEB DASTUR. WEB SAYT YOZAMIZ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h1 className="page-one__left__title">
        {translate("adobe")}
        </h1>
      </div>
      <div className="page-one__tabs">
        <PageLeftTabs/>
      </div>
    </div>
  );
};

export default PageOneLeft;
