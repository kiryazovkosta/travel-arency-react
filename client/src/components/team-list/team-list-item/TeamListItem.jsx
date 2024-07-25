function TeamListItem({
    imageUrl,
    name,
    designation,
    wowDelay
}) {
    return (
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={wowDelay}>
        <div className="team-item">
            <div className="overflow-hidden">
                <img className="img-fluid" src={imageUrl} alt="" />
            </div>
            <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-19px" }}>
                <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
            </div>
            <div className="text-center p-4">
                <h5 className="mb-0">{name}</h5>
                <small>{designation}</small>
            </div>
        </div>
    </div>
    )
}

export default TeamListItem;