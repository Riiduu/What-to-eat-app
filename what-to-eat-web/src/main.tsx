import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen.tsx';
import SearchResultsScreen from './screens/SearchResultsScreen.tsx';
import {Provider} from "react-redux";
import store from './store/store.ts'
import React from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: '/results',
    element: <SearchResultsScreen />
  }
]);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
