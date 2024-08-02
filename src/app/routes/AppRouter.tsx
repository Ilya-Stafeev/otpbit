import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "../../pages/home";
import { Layout } from "../layout/Layout";

export const AppRouter: FC = () => {

    const router = createBrowserRouter([
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              path: '',
              element: <Home />,
            },
            {
              path: 'about',
              // element: <About />,
            },
            {
              path: 'terms',
              // element: <Terms />,
            },
          ],
        },
        {
          path: 'wallets',
          // element: <Wallets />,
        },
        {
          path: 'exchange',
          // element: <Exchange />,
        },
        {
          path: 'options',
          // element: <Options />,
        },
        {
          path: 'staking',
          // element: <Staking />,
        },
      ]);

  return (
    <RouterProvider router={router} />
  )
}