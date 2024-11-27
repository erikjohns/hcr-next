import NavBar from "@/components/NavBar";
import {FaFacebook, FaInstagram} from "react-icons/fa";
import '@/styles/HomepageHero.css';

export default function HomepageHero() {
    return (
        <div className={'homepage-hero-container'}>
            <NavBar dark={{ status: false }}/>
            <video autoPlay muted loop className={'homepage-hero-video'} preload={'auto'}>
                <source src={'/videos/HomepageVideo.mp4'} type={'video/mp4'}/>
                Your browser does not support video.
            </video>
            <div className={'homepage-inner-container'}>
                <div className={'hero-text'}>
                    <h1>Hail Columbia Ranch</h1>
                    <h3>Event Venue & Lodge</h3>
                    <div className={'buttons'}>
                        {/*TODO: make these buttons link to somewhere */}
                        <button>Learn More</button>
                        <button>Contact Us</button>
                    </div>
                </div>
                <div className={'social-icons'}>
                    <FaInstagram className={'homepage-icon'}/>
                    <FaFacebook className={'homepage-icon'}/>
                </div>
            </div>
            <div className={'video-overlay'}></div>
            <div className={'video-gradient'}></div>
        </div>
    )
}