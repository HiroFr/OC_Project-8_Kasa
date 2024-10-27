import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './components/routes/AppRoutes';
import './sass/main.scss';

function App() {


  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
