import { Link } from "react-router-dom";
import Header from './Header';
import Navigation from "./Navigation";

const Categories = () => {
    const categories = [
        'Bonsai',
        'Succulent',
        'Ferns',
        'Hanging',
        'Flowering'
    ];

    return (
        <>
            <Header />
            <Navigation />
            <div className="categories">
            {
                categories.map((category, index) => {
                    return (
                        <div key={index} className="sidebar">
                            <Link key={index} className='link' to={`${category.toLowerCase()}`}>{category}
                    </Link>
                        </div>
                    )
                })
            }
            <Link to='/'>Back to home</Link>
            </div>
        </>
    );
}

export default Categories;