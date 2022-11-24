import { RouterProvider } from 'react-router-dom';
import { route } from './Routes/routes';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

function App() {
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
