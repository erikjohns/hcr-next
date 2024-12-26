import '@/styles/globals.css';
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import LodgeStats from "@/components/LodgeStats";
import Testimonials from "@/components/Testimonials";
import HomepageSection from "@/components/HomepageSection";

export default function LodgePage() {

    let lodgeHeroData = {
        video: '/videos/Lodge.mp4',
        title: 'The Lodge',
        subtitle: 'Blah Blah Blah',
    }

    const headerData = {
        title: "The Lodge",
        subtitle: "Enjoy the Mountain's Majesty",
        text:   `Although Butte is just 10 minutes away from the barn, we also offer a Lodge available for rent to accommodate you and your group. The Lodge comfortably sleeps up to 14 people, making it the perfect space to host family and friends in the days leading up to your big day. These accommodations provide an ideal option for those looking for an all-inclusive experience.`,
        image: '/images/McGrath-17.jpg',
        left: true,
    }

    return (
        <div>
            <Hero heroData={lodgeHeroData} />
            <HomepageSection data={headerData} />
            <LodgeStats />
            <Testimonials />
            <Footer />
        </div>
    )
}