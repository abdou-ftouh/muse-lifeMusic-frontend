import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/HomePage';
import Show from './pages/Show/ShowPage';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bands" element={<Show type="band" />} />
        <Route exact path="/events" element={<Show type="events" />} />
        <Route exact path="/signIn" element={<Form type="signIn" />} />
        <Route exact path="/singUp" element={<Form type="signUp" />} />
        <Route exact path="/admin" element={<Form type="signUp" />} />
      </Routes>
    </div>
  );
}

export default App;
