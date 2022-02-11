//From Components
import Slider from '../components/Carousel/Carousel'
import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'
import Goal from '../components/Goal/Goal'
import Donation from '../components/Donation/Donation';

function About() {
    return (
        <div>
              <Header/>
            <div>
                <Slider/>
                <Goal/>
                <Donation/>
            </div>
              <Footer/>
           
        </div>
    );
}

export default About;