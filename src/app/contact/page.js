import NavBar from "@/components/NavBar";
import '@/styles/globals.css';
import ContactForm from "@/components/ContactForm";
import '@/styles/ContactForm.css';
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <div>
            <div className={'contact-page-container'}>
                <NavBar dark={{ status: true }} />
                <div className={'contact-page-inner-container'}>
                    <div className={'contact-page-heading'}>
                        <h1>Contact Us</h1>
                        <h4>Want to get in touch?</h4>
                        <p>
                            { /* TODO: Fix the content in this section */}
                            Whether a weekend wedding or a week-long getaway, tell us more about your event and we’ll get
                            back to
                            you ASAP! Please, feel free to be as detailed as possible; the more info, the better. <br/>
                            <br/>
                            If simply trying to get a hold of us, please send an email to BLAH BLAH BLAH.
                        </p>
                    </div>

                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}