import {  UserOutlined,
} from "@ant-design/icons";

const AdminPage = ({ onTrue }) => {
  return (
      <>
          <div>AdminPage</div>
          <div className="user-modal__btn">
          <button className='Link' onClick={() => onTrue()}>
              Logout
          </button>
          </div>
      </>
  );
}

export default AdminPage