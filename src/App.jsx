import './App.css';
import Home from './Pages/Home/Home';
import Menu from './components/Menu/Menu';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';

function App() {
  return <RouterProvider router={router}/>
}

export default App;
