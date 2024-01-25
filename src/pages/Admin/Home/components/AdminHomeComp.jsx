import React from "react";
import { UserIcon1 } from "../../../../assets/icons";
import {
  UserSwitchOutlined,
  TeamOutlined,
  FolderOpenOutlined,
  WalletOutlined,
  ScheduleOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

const AdminHomeComp = () => {
  return (
    <div className="admin-home-comp">
      <div className="admin-cards">
        <div className="admin-card">
          <i>
            <UserSwitchOutlined />
          </i>
          <p>Lidlar</p>
          <h2>102</h2>
        </div>
        <div className="admin-card">
          <i>
            <TeamOutlined />
          </i>
          <p>O’quvchilar</p>
          <h2>302</h2>
        </div>
        <div className="admin-card">
          <i>
            <FolderOpenOutlined />
          </i>
          <p>Guruhlar</p>
          <h2>302</h2>
        </div>
        <div className="admin-card">
          <i>
            <WalletOutlined />
          </i>
          <p>Qarzdorlar</p>
          <h2>302</h2>
        </div>
        <div className="admin-card">
          <i>
            <ScheduleOutlined />
          </i>
          <p>Bu oy to’lovlar</p>
          <h2>302</h2>
        </div>
        <div className="admin-card">
          <i>
          <CreditCardOutlined />
          </i>
          <p>Oylik tushum</p>
          <h2>35 000 000 so'm</h2>
        </div>
        <div className="admin-card">
          <i>
          <CreditCardOutlined />
          </i>
          <p>Rejalashtirilgan oylik tushum</p>
          <h2>35 000 000 so'm</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminHomeComp;
