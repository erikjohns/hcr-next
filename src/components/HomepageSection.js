import '@/styles/globals.css';
import '@/styles/HomepageSection.css';

export default function HomepageSection({ data }) {

    return (
        <div className={'homepage-section-container'}>
            <div className={data.left ? 'homepage-section-text-container' : 'homepage-section-text-container homepage-section-text-right-align'}>
                <h1>{data.title}</h1>
                <h4>{data.subtitle}</h4>
                <p dangerouslySetInnerHTML={{ __html: data.text }}></p>
            </div>
            <img src={data.image} alt={data.title} className={data.left ? 'homepage-section-image' : 'homepage-section-image homepage-section-image-left-align'}/>
        </div>
    )
}