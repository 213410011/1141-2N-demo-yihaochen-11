import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomeLayoutPage_11, HomePage_11, BlogStaticPage_11, BlogLocalJsonPage_11 } from './pages';

const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayoutPage_11 />,
        children: [
            {
                index: true,
                element: <HomePage_11 />,
            },
            {
                path: 'static_11',
                element: <BlogStaticPage_11 />,
            },
            {
                path: 'localJson_11',
                element: <BlogLocalJsonPage_11 />,
            },
        ],
    },
]);

const App_11 = () => {
  return <RouterProvider router={router} />;
};

export default App_11

