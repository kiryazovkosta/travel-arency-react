function ContactLocation() {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <h5>Get In Touch</h5>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos</p>
            <div className="d-flex align-items-center mb-4">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                    <i className="fa fa-map-marker-alt text-white"></i>
                </div>
                <div className="ms-3">
                    <h5 className="text-primary">Office</h5>
                    <p className="mb-0">123 Street, New York, USA</p>
                </div>
            </div>
            <div className="d-flex align-items-center mb-4">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                    <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ms-3">
                    <h5 className="text-primary">Mobile</h5>
                    <p className="mb-0">+012 345 67890</p>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                    <i className="fa fa-envelope-open text-white"></i>
                </div>
                <div className="ms-3">
                    <h5 className="text-primary">Email</h5>
                    <p className="mb-0">info@example.com</p>
                </div>
            </div>
        </div>
    )
}

export default ContactLocation;