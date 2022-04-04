import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ReviewsAll from './components/ReviewsAll/ReviewsAll';
import DeshBoard from './components/DeshBoard/DeshBoard';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/index' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/reviews' element={<ReviewsAll />} />
        <Route path='/dashboard' element={<DeshBoard />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
