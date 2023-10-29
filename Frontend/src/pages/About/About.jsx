import "./About.css";
import delivery_img from "../../images/location.png";
const About = () => {
    return (
        <div className="about-section">
            <div className="about">
                <div className="about-text">
                    <h1>About Us</h1>
                    <p>
                        Embark on a culinary journey like no other with the Khanaja App.
                        Dive into a world of exquisite flavors, where tradition meets innovation.
                        Discover the essence of India's beloved snacks, sweets, and savory delights, all delivered right to your doorstep. Experience a taste of India, reimagined for your palate
                    </p>
                </div>
                <div className="about-img">
                    <img
                        src={"https://i.ytimg.com/vi/RWR6lvH5Xz0/maxresdefault.jpg"}
                        alt=""
                    />
                </div>
                <div className="about-delivery-img">
                    <p>Free Delivery </p>
                    <img src={delivery_img} width="200px" alt="" />
                    <p>Fast Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default About;
