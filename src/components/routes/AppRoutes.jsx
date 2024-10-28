import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import HousingLayout from '../pages/HousingLayout';

function AppRoutes() {
  return ( 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/*' element={<NotFound/>}/>
      <Route path='/housing/:id' element={<HousingLayout/>}/>
    </Routes>
   );
}

export default AppRoutes;