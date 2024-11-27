import LogoDark from "@/components/LogoDark";
import Link from "next/link";
import '@/styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <LogoDark />
            <nav>
                <Link href={'/homepage'} className={'footer-link'}><span className="main-navbar-hover-underline footer-navbar-hover-underline">Home</span></Link>
                <Link href={'/homepage'} className={'footer-link'}><span className="main-navbar-hover-underline footer-navbar-hover-underline">Venue</span></Link>
                <Link href={'/homepage'} className={'footer-link'}><span className="main-navbar-hover-underline footer-navbar-hover-underline">Lodge</span></Link>
                <Link href={'/homepage'} className={'footer-link'}><span className="main-navbar-hover-underline footer-navbar-hover-underline">Gallery</span></Link>
                <Link href={'/homepage'} className={'footer-link'}><span className="main-navbar-hover-underline footer-navbar-hover-underline">Rentals</span></Link>
                <Link href={'/homepage'} className={'footer-link'}><span className="main-navbar-hover-underline footer-navbar-hover-underline">Contact</span></Link>
            </nav>
        </footer>
    )
}