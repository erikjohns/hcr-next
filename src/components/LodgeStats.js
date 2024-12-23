import { LiaBedSolid, LiaBathSolid, LiaUser } from "react-icons/lia";

export default function LodgeStats() {
    return (
        <div>
            <div>
                <LiaUser style={{ fontSize: '10rem' }} />
                <p>14 Guests</p>
            </div>
            <div>
                <LiaBedSolid style={{ fontSize: '10rem' }}/>
                <p>5 Bedrooms</p>
                <p>9 Beds</p>
            </div>
            <div>
                <LiaBathSolid style={{ fontSize: '10rem' }} />
                <p>2.5 Bathrooms</p>
            </div>
        </div>
    )
}