import React from 'react'
import './AboutUs.css'
import InfoSection from '../Home/InfoSection/InfoSection'
import { InfoData, InfoData3 } from '../Home/InfoSection/InfoData'
import Card from '../Test/Card'
import Navbar from "../Home/Navbar";

const AboutUs = () => {
    return (
        <>
        <Navbar/>
            <div className='head1'>About Us</div>
            <InfoSection {...InfoData3} />
        </>
    )
}

export default AboutUs