import Home from './pages/Home';
import {Routes, Route } from 'react-router-dom';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/destination" element={<Destination />} />
        <Route exact path="/crew" element={<Crew />} />
        <Route exact path="/technology" element={<Technology />} />

      </Routes>
  );
}

export default App;
