import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from '../App';
import Categories from "./Categories";
import Cart from "./Cart";
import CategoryCard from './CategoryCard';
import OrderPlaced from "./OrderPlaced";
import AboutUs from "./AboutUs";
import ErrorPage from './ErrorPage';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: 'about',
            element: <AboutUs />,
        },
        {
            path: 'categories',
            element: <Categories />,
        },
        {
            path: 'categories/:name',
            element: <CategoryCard />,
        },
        {
            path: 'cart',
            element: <Cart />,
        },
        {
            path: 'cart/success',
            element: <OrderPlaced />
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;