import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Logs from "./Components/Logs";
import ShowLog from "./Components/ShowLog";
import NewLog from "./Components/NewLog";
import EditLog from "./Components/EditLog";

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Logs />} />
        <Route path='show/:id' element={<ShowLog />} />
        <Route path='create' element={<NewLog />} />
        <Route path='edit/:id' element={<EditLog />} />
      </Route>
    </Routes>
  )
}

export default App;
