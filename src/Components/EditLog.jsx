import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

const EditLog = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const {id} = useParams();
  const navigate = useNavigate();
  const [updatedLog, setUpdatedLog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleInputChange = e => {
    const {name, value} = e.target;
    setUpdatedLog({...updatedLog, [name]: value});
  };

  const handleRadioChange = e => {
    const {name} = e.target;
    setUpdatedLog({...updatedLog, [name]: !updatedLog[name]});
  };

  const handleSubmit = () => {
    axios.put(`${BASE_URL}/${id}`, updatedLog).then(() => {
      navigate(`/logs/${id}`);
    });
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/${id}`).then(res => setUpdatedLog(res.data));
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="edit-log">
      <h1>Edit Log</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="form-group">
            <label htmlFor="captain-name">Captain's Name:</label>
            <input
              type="text"
              id="captain-name"
              name="captainName"
              value={updatedLog.captainName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={updatedLog.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="post">Post:</label>
            <input
              type="text"
              id="post"
              name="post"
              value={updatedLog.post}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="days">Days Since Last Crisis:</label>
            <input
              type="tel"
              id="days"
              name="daysSinceLastCrisis"
              value={updatedLog.daysSinceLastCrisis}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <span>Mistakes Were Made Today:</span>
            <input
              type="radio"
              id="true"
              name="mistakesWereMadeToday"
              checked={updatedLog.mistakesWereMadeToday === true}
              onChange={handleRadioChange}
            />
            <label htmlFor="true">True</label>
            <input
              type="radio"
              id="false"
              name="mistakesWereMadeToday"
              checked={updatedLog.mistakesWereMadeToday === false}
              onChange={handleRadioChange}
            />
            <label htmlFor="false">False</label>
          </div>
          <div className="btns">
            <button type="button" onClick={() => navigate(`/logs/${id}`)}>
              Cancel
            </button>
            <button type='submit'>Save Changes</button>
          </div>
        </form>
      )}
    </main>
  );
};

export default EditLog;
