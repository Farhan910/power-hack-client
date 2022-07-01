import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import Header from './Components/Header';
import Home from './Components/Home';
import UserCard from './Components/UserCard';
import UserTable from './Components/UserTable';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/billing-list/:id" element={<UserCard />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Header/>
      <AddUser/>
     <UserTable/>
    </div>
  );
}

export default App;
