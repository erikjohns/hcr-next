import NavBar from "@/components/NavBar";
import '@/styles/HomepageHero.css';

export default function Hero({ heroData }) {
    return (
        <div className={'homepage-hero-container'}>
            <NavBar dark={{ status: false }} />
            <video autoPlay muted loop className={'homepage-hero-video'} preload={'auto'}>
                <source src={heroData.video} type={'video/mp4'} />
                Your browser does not support video.
            </video>
            <div className={'homepage-inner-container'}>
                <div className={'hero-text'}>
                    <h1>{heroData.title}</h1>
                    <h3>{heroData.subtitle}</h3>
                </div>
            </div>
            <div className={'video-overlay'}></div>
            <div className={'video-gradient'}></div>
        </div>
    )
}