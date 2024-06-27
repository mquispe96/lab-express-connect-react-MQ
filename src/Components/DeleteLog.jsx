import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const DeleteLog = ({setShowDeleteWindow, id}) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  return (
    <section className="delete-window">
      <h2>Are you sure you want to delete this log?</h2>
      <div className="delete-window__btns">
        <button onClick={() => setShowDeleteWindow(false)}>NO</button>
        <button
          onClick={() => {
            axios.delete(`${BASE_URL}/${id}`);
            setShowDeleteWindow(false);
            navigate('/');
          }}
        >
          YES
        </button>
      </div>
    </section>
  );
};

export default DeleteLog;
