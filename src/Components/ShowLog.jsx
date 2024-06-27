import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const ShowLog = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const {id} = useParams();
  const [log, setLog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}/${id}`).then(res => setLog(res.data));
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [id]);

  return null;
};

export default ShowLog;
