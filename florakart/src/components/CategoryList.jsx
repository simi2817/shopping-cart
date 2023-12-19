/* eslint-disable react/prop-types */
import ItemCard from './ItemCard.jsx';

const CategoryList = ({ category }) => {
    return (
        <div className='category-card'>
         {category.map((item, index) => {
            return <ItemCard key={index} item={item} />
         })}
        </div>
    )
}

export default CategoryList;