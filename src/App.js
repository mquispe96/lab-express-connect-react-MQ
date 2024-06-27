import {Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Logs from './Components/Logs';
import ShowLog from './Components/ShowLog';
import NewLog from './Components/NewLog';
import EditLog from './Components/EditLog';

const App = () => {
  //   <Route path='create' element={<NewLog />} />
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Logs />} />
        <Route path="show/:id" element={<ShowLog />} />
        <Route path='edit/:id' element={<EditLog />} />
      </Route>
    </Routes>
  );
};

export default App;
