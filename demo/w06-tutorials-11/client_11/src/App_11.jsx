import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomeLayoutPage_11, HomePage_11, BlogStaticPage_11, BlogLocalJsonPage_11, BlogNodePage_11, BookListPage_11 } from './pages';

import { T11_ErrorExamplePage_11, T12_UseStateBasicsPage_11} from './pages/tutorials'

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
            {
                path: 'node_11',
                element: <BlogNodePage_11 />,
            },
            {
                path: 'booklist_11',
                element: <BookListPage_11 />,
            },
        ],
    },
    {
        path: '/tutorials',
        element: <HomeLayoutPage_11 />,
        children: [
            {
                index: true,
                element: <HomePage_11/>,
            },
            {
                path: 't11_11',
                element: <T11_ErrorExamplePage_11 />,
            },
            {
                path: 't12_11',
                element: <T12_UseStateBasicsPage_11 />,
            },
        ]
    }
]);

const App_11 = () => {
  return <RouterProvider router={router} />;
};

export default App_11

