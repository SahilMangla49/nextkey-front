import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Property from './components/Property';

const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col justify-center items-center bg-gray-100'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/properties' element={<Property />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
