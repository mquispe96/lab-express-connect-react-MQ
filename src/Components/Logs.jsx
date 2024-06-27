import {useEffect, useState} from 'react';
import axios from 'axios';
import Loading from './Loading';
import Log from './Log';

const Logs = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [logs, setLogs] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}`).then(res => setLogs(res.data));
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="logs-container">
      <h1>Logs</h1>
      {isloading ? (
        <Loading />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain's Name</th>
              <th>See this log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, idx) => (
              <Log key={idx} log={log} idx={idx} />
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default Logs;
