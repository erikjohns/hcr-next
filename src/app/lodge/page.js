import '@/styles/globals.css';
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function LodgePage() {

    let lodgeHeroData = {
        video: '/videos/Lodge.mp4',
        title: 'The Lodge',
        subtitle: 'Blah Blah Blah',
    }

    return (
        <div>
            <Hero heroData={lodgeHeroData} />
            <Footer />
        </div>
    )
}