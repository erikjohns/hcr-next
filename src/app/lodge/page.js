import '@/styles/globals.css';
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import LodgeStats from "@/components/LodgeStats";
import Testimonials from "@/components/Testimonials";

export default function LodgePage() {

    let lodgeHeroData = {
        video: '/videos/Lodge.mp4',
        title: 'The Lodge',
        subtitle: 'Blah Blah Blah',
    }

    return (
        <div>
            <Hero heroData={lodgeHeroData} />
            <Testimonials />
            <LodgeStats />
            <Footer />
        </div>
    )
}