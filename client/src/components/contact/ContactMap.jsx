function ContactMap() {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <iframe className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234985.60780226373!2d27.390475345558973!3d42.505484616367374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6943f361d7c7b%3A0xa00b54e8b26fae0!2sBurgas%2C%20Bulgaria!5e0!3m2!1sen!2sbd!4v1690569530621!5m2!1sen!2sbd"
                frameBorder="0" style={{ minHeight: "300px", border: "0" }} allowFullScreen="" aria-hidden="false"
                tabIndex="0"></iframe>
        </div>
    )
}

export default ContactMap;