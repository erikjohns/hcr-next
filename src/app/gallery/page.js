import NavBar from "@/components/NavBar";
import '@/styles/globals.css';
import ComingSoonPage from "@/app/coming-soon/page";

export default function GalleryPage() {
    return (
        <div>
            <NavBar dark={{ status: true }} />
            <ComingSoonPage />
        </div>

    )
}