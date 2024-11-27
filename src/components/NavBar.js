import Link from "next/link";
import LogoLight from "@/components/LogoLight";
import LogoDark from "@/components/LogoDark";
import '@/styles/NavBar.css';

export default function NavBar({ dark }) {
    return (
        <div className={'nav-menu'}>
            <Link href={'/homepage'} className={dark.status ? 'navbar-link navbar-link-dark' : 'navbar-link'}><span className="main-navbar-hover-underline">Home</span></Link>
            <Link href={'/venue'} className={dark.status ? 'navbar-link navbar-link-dark' : 'navbar-link'}><span className="main-navbar-hover-underline">Venue</span></Link>
            <Link href={'/lodge'} className={dark.status ? 'navbar-link navbar-link-dark' : 'navbar-link'}><span className="main-navbar-hover-underline">Lodge</span></Link>
            {dark.status ? <LogoDark /> : <LogoLight />}
            <Link href={'/gallery'} className={dark.status ? 'navbar-link navbar-link-dark' : 'navbar-link'}><span className="main-navbar-hover-underline">Gallery</span></Link>
            <Link href={'/about'} className={dark.status ? 'navbar-link navbar-link-dark' : 'navbar-link'}><span className="main-navbar-hover-underline">About</span></Link>
            <Link href={'/contact'} className={dark.status ? 'navbar-link navbar-link-dark' : 'navbar-link'}><span className="main-navbar-hover-underline">Contact</span></Link>
        </div>
    )
}