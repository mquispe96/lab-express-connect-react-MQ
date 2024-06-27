import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const NewLog = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [newLog, setNewLog] = useState({
    captainName: '',
    title: '',
    post: '',
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleInputChange = e => {
    const {name, value} = e.target;
    setNewLog({...newLog, [name]: value});
  };

  const handleRadioChange = e => {
    const {name} = e.target;
    setNewLog({...newLog, [name]: !newLog[name]});
  };

  const handleSubmit = () => {
    axios.post(`${BASE_URL}`, newLog).then(() => {
      navigate('/logs');
    });
  };

  return (
    <main className="create-log">
      <h1>New Log</h1>
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
            value={newLog.captainName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newLog.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="post">Post:</label>
          <input
            type="text"
            id="post"
            name="post"
            value={newLog.post}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="days">Days Since Last Crisis:</label>
          <input
            type="tel"
            id="days"
            name="daysSinceLastCrisis"
            value={newLog.daysSinceLastCrisis}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <span>Mistakes Were Made Today:</span>
          <input
            type="radio"
            id="true"
            name="mistakesWereMadeToday"
            checked={newLog.mistakesWereMadeToday === true}
            onChange={handleRadioChange}
          />
          <label htmlFor="true">True</label>
          <input
            type="radio"
            id="false"
            name="mistakesWereMadeToday"
            checked={newLog.mistakesWereMadeToday === false}
            onChange={handleRadioChange}
          />
          <label htmlFor="false">False</label>
        </div>
        <div className="btns">
          <button type="button" onClick={() => navigate('/logs')}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default NewLog;
