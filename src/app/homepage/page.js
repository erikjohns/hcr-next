import '@/styles/globals.css';
import HomepageHero from "@/components/HomepageHero";
import HomepageSection from "@/components/HomepageSection";
import Footer from "@/components/Footer";

export default function Homepage() {

    /* TODO: Fix images for each section and replace with proper text */
    const sections = [
        {
            title: "Discover",
            subtitle: "Hail Columbia Ranch: Where Love & Nature Unite",
            text:   `Welcome to Hail Columbia Ranch, a picturesque wedding and event venue in Butte, 
                Montana. Our charming barn, surrounded by Montana's natural beauty, 
                sets the stage for your special day. Explore rustic elegance where romance 
                meets rugged allure. Extend your experience by staying at 'The Lodge,' 
                our cozy cabin-style house in Hail Columbia Gulch. It's more than accommodation; 
                it's an immersive retreat, blending rustic charm with modern comfort. 
                Your dream event begins at Hail Columbia Ranch – where love and nature unite in 
                perfect harmony, and every moment is a cherished memory.`,
            image: '/images/McGrath-7.jpg',
            left: true,
        },
        {
            title: "The Venue",
            subtitle: "Amidst The Mountains - Your Serene Venue in Nature's Embrace",
            text:   `Discover the epitome of rustic luxury at our venue in Butte, Montana. Surrounded by 
                nature's breathtaking backdrop, our charming barn exudes timeless elegance, creating 
                the perfect setting for your special day. Embrace the unique allure of our venue, 
                where each moment becomes a cherished memory against the stunning canvas of Montana's 
                natural beauty.`,
            hasButton: true,
            buttonLink: '/venue',
            left: false,
            image: '/images/BarnFront.jpg',
        },
        {
            title: "The Lodge",
            subtitle: "A Cozy Mountain Retreat, Tucked Away in Tranquil  Serenity",
            text:   `Explore The Lodge, a hidden gem where cozy comforts meet serene surroundings. Nestled in 
                tranquil serenity, this retreat offers a perfect blend of rustic charm and modern tranquility. 
                Every moment spent at The Lodge is a memory etched against the backdrop of nature's beauty, 
                creating an enchanting experience for your getaway or special event.`,
            hasButton: true,
            buttonLink: '/lodge',
            left: true,
            image: '/images/McGrath-17.jpg',
        },
    ];

    return (
        <div className={'homepage-container'}>
            <HomepageHero />
            <HomepageSection data={sections[0]} />
            <HomepageSection data={sections[1]} />
            <HomepageSection data={sections[2]} />
            <Footer />
        </div>
    )
}