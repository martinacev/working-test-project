
import PropTypes from 'prop-types'; 
import classes from './Hero.module.css';
import logo from '../../../public/hero-car.webp';

const Hero = ({ title, subtitle }) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <h2 className={classes.title}>{title}</h2>
                <p className={classes.subtitle}>{subtitle}</p>
                <button>here</button>
            </div>
            <div className={classes.image}>
               <img className={classes.logo} src={logo} alt='car' />
            </div>
        </div>
    );
};


Hero.defaultProps = {
    title: "Find Your Dream Car",
    subtitle: "Experience freedom on the road with our premium car rentals. Perfect for any trip. Book now for comfort and style."
};

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default Hero;
