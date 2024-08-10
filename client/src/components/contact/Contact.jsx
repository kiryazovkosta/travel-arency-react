import ContactForm from "./ContactForm"
import ContactLocation from "./ContactLocation"
import ContactMap from "./ContactMap"

function Contact() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                    <h1 className="mb-5">Contact For Any Query</h1>
                </div>
                <div className="row g-4">
                    <ContactLocation />
                    <ContactMap />
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact