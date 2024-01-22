import { Link } from "react-router-dom";

const UserModal = ({ onCancel, onFalse}) => {
  return (
      <div className='modal-out' onClick={() => onCancel()}>
          <div className='user-modal' onClick={(e) => e.stopPropagation()}>
              <div className='user-modal__logo'></div>
              <div className='user-modal__desc'>
                  <h3>Abbos va Kamronbek</h3>
              </div>
                  <div onClick={() => onFalse()} className='user-modal__btn'>
                      <Link className="Link">Login</Link>
                  </div>
          </div>
      </div>
  );
};

export default UserModal;
