import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SearchScreen from './screens/SearchScreen.tsx';
import HomeScreen from './screens/HomeScreen.tsx';
import SearchResultsScreen from './screens/SearchResultsScreen.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/search",
    element: <SearchScreen />
  },
  {
    path: '/results',
    element: <SearchResultsScreen />
  }
]);

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>,
)
