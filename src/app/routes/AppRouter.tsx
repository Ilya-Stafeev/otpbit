import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PageProvider, PageTransitionProvider } from '../providers';

import { PageTransition } from '../../shared';

import { Layout } from "../layout/Layout";
import { Home } from '../../pages/home';
import { About } from '../../pages/about';
import { Terms } from '../../pages/terms';


export const AppRouter: FC = () => {

    const router = createBrowserRouter([
        {
          path: '/',
          element: (
            <>              
              <PageTransitionProvider>
                <Layout />
                <PageTransition />
              </PageTransitionProvider>
            </>           
          ),
          children: [
            {
              path: '',
              element: <Home />,
            },
            {
              path: 'about',
              element: (
                <PageProvider>
                  <About />
                </PageProvider>
              ),
            },
            {
              path: 'terms',
              element: (
                <PageProvider>
                  <Terms />
                </PageProvider>
              ),
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