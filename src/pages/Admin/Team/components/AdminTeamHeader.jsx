import React from "react";
import {
  DownloadOutlined,
  SearchOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const AdminTeamHeader = () => {
  return (
    <div className="admin-team-header">
      <h2 className="admin-team-header__title">Guruhlar ro’yxati</h2>
      <div className="admin-team-header__right">
        <button className="right__button">
          <p>Eksport excel</p>
          <i>
            <DownloadOutlined />
          </i>
        </button>
        <div className="right__search">
          <input type="text" placeholder="Izlash" />
          <i>
            <SearchOutlined />
          </i>
        </div>
        <button className="right__filter">
          <p>Filter</p>
        </button>
        <button className="right__add-btn">
          <i>
            <PlusOutlined />
          </i>
          <p>Qo'shish</p>
        </button>
      </div>
    </div>
  );
};

export default AdminTeamHeader;
