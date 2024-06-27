import {useNavigate} from 'react-router-dom';

const Log = ({log, idx}) => {
  const {captainName, title, mistakesWereMadeToday} = log;
  const navigate = useNavigate();

  return (
    <tr>
      <td>{mistakesWereMadeToday === true ? 'Yes' : 'No'}</td>
      <td>{captainName}</td>
      <td>
        <span onClick={() => navigate(`/logs/${idx}`)}>{title}</span>
      </td>
    </tr>
  );
};

export default Log;
