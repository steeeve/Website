// Home page

import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Fun  from '../components/VideoJS';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    

    return (
        <div>
            <Sidebar isOpen = {isOpen} toggle = {toggle}/>
            <Navbar toggle = {toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Resume />
            <Projects />
            <Fun />
            <Footer />
        </div>
    );
};

export default Home;
