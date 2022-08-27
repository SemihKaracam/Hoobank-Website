import discount from "../../img/Discount.svg"
import robot from "../../img/robot.png"
import ArrowUp from "../../img/ArrowUp.svg"
import "./hero.css"
function Hero() {
    return (
        <div className="hero section-padding">
            <div className="hero-info">
                <div className="hero-discount">
                    <img src={discount} alt="" />
                    <p className="opacity-low"> <span style={{color:"white"}}>20%</span> Discount For <span style={{color:"white"}}>1 Month</span> Account</p>
                </div>
                <div className="hero-title-container">
                    <h3 className="hero-title">The Next <br /> <span className="aqua-text">Generation</span></h3>
                    <div className="hero-get-started">
                        <span className="aqua-text">Get Started</span>
                        <img src={ArrowUp} alt="" />
                    </div>
                </div>
                <h3 className="hero-title">Payment Method.</h3>
                <p className="hero-description opacity-low">
                    Our team of experts uses a methodology to identify the credit cards
                    most likely to fit your needs. We examine annual percentage rates,
                    annual fees.
                </p>
            </div>
            <div className="hero-img">
                <div className="hero-gradient pink-gradient">
                </div>
                <div className="hero-gradient blue-gradient">
                </div>
                <div className="hero-gradient white-gradient">
                </div>
                <img src={robot} alt="" />
            </div>
        </div>
    )
}


export default Hero