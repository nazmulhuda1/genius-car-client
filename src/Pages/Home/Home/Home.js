import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import ContactInfo from '../ContactInfo/ContactInfo';
import OurProducts from '../OurProducts/OurProducts';
import OurTeam from '../OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactInfo></ContactInfo>
            <OurProducts></OurProducts>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;