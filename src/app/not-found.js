import NavBar from "@/components/NavBar";
import '@/styles/globals.css';
import '@/styles/NotFound.css';

export default function NotFound () {
    return (
        <div className={'not-found-container'}>
            <NavBar dark={{status: true}}/>
            <div className={'not-found-inner-container'}>
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you're looking for doesn't exist.</p>
            </div>
        </div>
    )
}