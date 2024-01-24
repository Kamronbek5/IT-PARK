

const AdminPage = ({ onTrue }) => {
  return (
      <>
          <div>AdminPage</div>
          <div className="user-modal__btn">
          <button className='Link' onClick={() => onTrue()}>
              Logout
          </button>
          </div>
          <button className="change-btn">
            Change
          </button>
      </>
  );
}

export default AdminPage