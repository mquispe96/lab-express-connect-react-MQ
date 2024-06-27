import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

const ShowLog = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const {id} = useParams();
  const navigate = useNavigate();
  const [log, setLog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}/${id}`).then(res => setLog(res.data));
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [id]);

  return (
    <main className="log-container">
      <h1>Log</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="log-container__content">
          <div className="text">
            <h2>{`${log.title} - by ${log.captainName}`}</h2>
            <p>{log.post}</p>
            <p>{`Days since last crisis: ${log.daysSinceLastCrisis}`}</p>
          </div>
          <div className="btns">
            <button onClick={() => navigate('/')}>BACK</button>
            <button onClick={() => navigate(`/edit/${id}`)}>EDIT</button>
            <button onClick={() => alert('Log deleted!')}>DELETE</button>
          </div>
        </section>
      )}
    </main>
  );
};

export default ShowLog;
