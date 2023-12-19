import Header from './Header';
import Navigation from './Navigation';
import { useParams } from "react-router-dom";
import CategoryList from './CategoryList';
import bonsai from '../data/bonsai.js';
import succulent from '../data/succulent.js';

const CategoryCard = () => {
    const { name } = useParams();
    return (
        <>
            <Header />
            <Navigation />
            <div className='category-card'>
            {
                {
                    'bonsai': <CategoryList category={bonsai}/>,
                    'succulent': <CategoryList category={succulent} />
                }[name]
            }
            </div>
        </>
    )
}

export default CategoryCard;