import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import DeleteLog from './DeleteLog';

const ShowLog = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const {id} = useParams();
  const navigate = useNavigate();
  const [log, setLog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteWindow, setShowDeleteWindow] = useState(false);

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
            <button onClick={() => setShowDeleteWindow(true)}>DELETE</button>
          </div>
        </section>
      )}
      {showDeleteWindow && <DeleteLog setShowDeleteWindow={setShowDeleteWindow} id={id} />}
    </main>
  );
};

export default ShowLog;
