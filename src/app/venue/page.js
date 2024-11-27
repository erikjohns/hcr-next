import '@/styles/globals.css';
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function VenuePage() {

    let heroData = {
        video: '/videos/HomepageVideo.mp4',
        title: 'The Venue',
        subtitle: 'BLAH BLAH BLAH',
    }

    return (
        <div>
            <Hero heroData={heroData} />
            <Footer />
        </div>
    )
}