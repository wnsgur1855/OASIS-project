import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Header from '../component/Header';
import ODISEL from '../pages/ODISEL';
import OrganoEZ from '../pages/OrganoEZ';
import SpaicalDay from '../pages/SpaicalDay';
import Contact from '../pages/Contact';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='ODSEL' element={<ODISEL />} />
        <Route path='OrganoEZ' element={<OrganoEZ />} />
        <Route path='SpacialDay' element={<SpaicalDay />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
