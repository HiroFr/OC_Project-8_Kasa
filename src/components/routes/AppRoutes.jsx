import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import About from '../pages/About';

function AppRoutes() {
  return ( 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
   );
}

export default AppRoutes;