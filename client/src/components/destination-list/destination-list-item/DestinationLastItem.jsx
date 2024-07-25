function DestinationLastItem({
    title,
    discount,
    imageUrl,
    wowDelay,
    _id
}) {
    return (
        <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay={wowDelay} style={{ minHeight: "350px" }}>
            <a className="position-relative d-block h-100 overflow-hidden" href="">
                <img className="img-fluid position-absolute w-100 h-100" src={imageUrl} alt="" style={{ objectFit: "cover" }} />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">{discount}% OFF</div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">{title}</div>
            </a>
        </div>
    )
}

export default DestinationLastItem;