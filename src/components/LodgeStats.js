import { LiaBedSolid, LiaBathSolid, LiaUser } from "react-icons/lia";
import '@/styles/LodgeStats.css';

export default function LodgeStats() {
    return (

        <div className={'homepage-section-container'}>
            <div className={'homepage-section-text-container homepage-section-text-right-align'}>
                <h1>Stats</h1>
                <h4>See what the lodge has to offer</h4>
                <p style={{ marginBottom: '2rem' }}>
                    INSERT CONTENT HERE ABOUT STATS AND AMENITIES
                </p>
                <div className={'lodge-stats'}>
                    <div className={'stat-container'}>
                        <LiaUser style={{fontSize: '4rem'}}/>
                        <p>14 Guests</p>
                    </div>
                    <div className={'stat-container'}>
                        <LiaBedSolid style={{fontSize: '4rem'}}/>
                        <div>
                            <p>5 Bedrooms</p>
                            <p>9 Beds</p>
                        </div>
                    </div>
                    <div className={'stat-container'}>
                        <LiaBathSolid style={{fontSize: '4rem'}}/>
                        <p>2.5 Bathrooms</p>
                    </div>
                </div>
            </div>
            <img src={'/images/McGrath-5.jpg'} alt={'The Lodge Exterior'} className={'homepage-section-image homepage-section-image-left-align'} />
        </div>


    )
}