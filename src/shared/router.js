import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Header from '../component/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
