import { Link } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";

const AboutUs = () => {
    return (
        <>
            <Header />
            <Navigation />
            <div className="home">
                <img src='https://www.everwallpaper.co.uk/cdn/shop/products/cactus-and-flowers-wallpaper-mural-plain_cb1b71fe-8692-4ec8-87b2-23d0e717545a.jpg?v=1640140683' alt="flora" height={500}/>
                <br />
                <p>
                Looking to start or grow your collection of indoor plants?</p>
                <p>Whether you’re an experienced green-fingered guru or a first time plant parent, our range of potted house plants has something for everyone.</p>
                <p>From small succulents to powerful palms, flourishing ferns and charming calatheas.</p> 
                <p>The gang’s all here! Ready and waiting to turn your home into a gorgeous green indoor jungle.
                </p>
                <br />
                <Link to='/'>Back to home</Link>
            </div>
        </>
    );
}

export default AboutUs;