function ServiceListItem({
    icon,
    name,
    description,
    wowDelay
}) {
    return (
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={wowDelay}>
            <div className="service-item rounded pt-3">
                <div className="p-4">
                    <i className={icon}></i>
                    <h5>{name}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceListItem