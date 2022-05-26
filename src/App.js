import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './features/header/Header';
import Footer from './features/footer/Footer';
import HomePage from './pages/Home/HomePage';
import ShowPage from './pages/Show/ShowPage';
import FormPage from './pages/Forms/FormPage';

function App() {
  return (
    <div className='main'>
        <Header />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/bands" element={<ShowPage type="band" />} />
          <Route exact path="/events" element={<ShowPage type="events" />} />
          <Route exact path="/signIn" element={<FormPage type="signIn" />} />
          <Route exact path="/singUp" element={<FormPage type="signUp" />} />
          <Route exact path="/admin" element={<FormPage type="signUp" />} />
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
