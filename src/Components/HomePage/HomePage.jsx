import React, { useEffect} from 'react';
import Navbar from '../navBar/navbar';
import './HomePage.css';
import base_img from '../../Resources/base_img.png';
import animation_1 from '../../Resources/animation_1.png';
import animation_2 from '../../Resources/animation_2.png';
import animation_3 from '../../Resources/animation_3.png';
//import content_title from '../../Resources/content_title.svg';
import ContentTitleSvg from './ContentTitleSvg';
// import BaseImgSvg from './BaseImgSvg';
// import Animation1 from './Animation1';
// import Animation2 from './Animation2';
// import Animation3 from './Animation3';


const HomePage = () => {

    useEffect(() => {
            const images = document.querySelectorAll('.image');
            let currentIndex = 0;
    
            function showNextImage() {
                images[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add('active');
            }
    
            images[currentIndex].classList.add('active'); // Show the first image initially
            setInterval(showNextImage, 1000); // Change image every 2 seconds  
    }, []);
    

    return (
        <div id='home' className='main_div'>
            <div>
                <Navbar />
            </div>

            <div id="flex-container">
                <div id="content" className='box'>
                    {/* <h1> Bringing Ideas With Design </h1> */}
                    {/* <img src={content_title} alt="content_title" id="content_title"/> */}
                    <ContentTitleSvg />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button id="btn_content"> <span id="btn_text">GET IN TOUCH</span> </button>
                </div>

                {/* <ImageAnimation /> */}
                <div id="image-container" className='box'>
                <img src={base_img} alt="base_img" className="image"/>
                {/* <BaseImgSvg /> */}
                {/* <Animation1 />
                <Animation2 />
                <Animation3 /> */}
                <img src={animation_1} alt="animation_1" className="image"/>
                <img src={animation_2} alt="animation_2" className="image"/>
                <img src={animation_3} alt="animation_3" className="image"/>
            </div>

            </div>

        </div>

    )
}

export default HomePage;