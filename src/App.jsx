import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import AllCars from './components/AllCars/AllCars';
import Details from './components/Details/Details';
import NotFound from './components/NotFound/NotFound';

function App() {
  // const routes = createBrowserRouter([
  const routes = createHashRouter([
    {
      path: '/',
      element: <Dashboard />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'allCars', element: <AllCars /> },
        { path: 'details/:id', element: <Details /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
