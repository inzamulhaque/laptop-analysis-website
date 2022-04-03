import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ReviewsAll from './components/ReviewsAll/ReviewsAll';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/index' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/reviews' element={<ReviewsAll />} />
      </Routes>
    </>
  );
}

export default App;
