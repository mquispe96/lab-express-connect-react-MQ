import {Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Logs from './Components/Logs';
import ShowLog from './Components/ShowLog';
import NewLog from './Components/NewLog';
import EditLog from './Components/EditLog';

const App = () => {
  return (
    <Routes>
      <Route path="/logs" element={<NavBar />}>
        <Route index element={<Logs />} />
        <Route path="/logs/new" element={<NewLog />} />
        <Route path="/logs/:id" element={<ShowLog />} />
        <Route path="/logs/:id/edit" element={<EditLog />} />
      </Route>
    </Routes>
  );
};

export default App;
