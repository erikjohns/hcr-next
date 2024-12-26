import '@/styles/globals.css';
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import HomepageSection from "@/components/HomepageSection";

export default function VenuePage() {

    let heroData = {
        video: '/videos/HomepageVideo.mp4',
        title: 'The Venue',
        subtitle: 'BLAH BLAH BLAH',
    }

    let venueSectionData = {
        title: 'The Venue',
        subtitle: 'BLAH BLAH BLAH BLAH',
        text: `The barn at Hail Columbia Ranch was originally built in 1998 as a dedicated event space and was fully remodeled in 2024 to enhance its charm and functionality.
            The renovation includes a newly designed, screened-in porch with cozy seating areas that creates a seamless indoor/outdoor experience.
            With 4,000 square feet of open space, the barn can accommodate up to 225 guests.`,
        image: '/images/McGrath-8.jpg',
        left: false,
    }

    let venueGallerySectionData = {
        title: 'The Space',
        subtitle: 'See what The Barn Has to Offer',
        text: `The facility is fully equipped with a kitchen, bar, restrooms, and both heating and air conditioning for year-round comfort.
            The outdoor spaces provide breathtaking views of the surrounding landscape, with the option of indoor or outdoor ceremony locations.
            The barn’s modern rustic aesthetic makes it the ideal setting to celebrate your special day.`,
        image: '/images/BarnInterior.jpg',
        left: true,
    }

    let weddingGallerySectionData = {
        title: 'The Events',
        subtitle: 'Get Inspired by Our Past Events',
        text: `The barn at Hail Columbia Ranch was originally built in 1998 as a dedicated event space and was fully remodeled in 2024 to enhance its charm and functionality.
            The renovation includes a newly designed, screened-in porch with cozy seating areas that creates a seamless indoor/outdoor experience.
            With 4,000 square feet of open space, the barn can accommodate up to 225 guests.<br /><br />
            The facility is fully equipped with a kitchen, bar, restrooms, and both heating and air conditioning for year-round comfort.
            The outdoor spaces provide breathtaking views of the surrounding landscape, with the option of indoor or outdoor ceremony locations.
            The barn’s modern rustic aesthetic makes it the ideal setting to celebrate your special day.`,
        image: '/images/Wedding.jpg',
        left: false,
    }

    return (
        <div>
            <Hero heroData={heroData} />
            <HomepageSection data={venueSectionData} />
            <HomepageSection data={venueGallerySectionData} />
            <HomepageSection data={weddingGallerySectionData} />
            <Footer />
        </div>
    )
}