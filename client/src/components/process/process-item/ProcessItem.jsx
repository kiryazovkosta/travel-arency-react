function ProcessItem({
    step,
    description,
    icon,
    wowDelay
}) {
    return (
        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay={wowDelay}>
        <div className="position-relative border border-primary pt-5 pb-4 px-4">
            <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: "100px", height: "100px" }}>
                <i className={icon}></i>
            </div>
            <h5 className="mt-4">{step}</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0">{description}</p>
        </div>
    </div>
    )
}

export default ProcessItem;