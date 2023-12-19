import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <Link className='navLink' to='/about'>About-Us</Link>
                <Link className='navLink' to='/categories'>Categories</Link>
                <Link className='navLink' to='/cart'>Cart</Link>
            </nav>
        </div>
    )
}

export default Navigation;