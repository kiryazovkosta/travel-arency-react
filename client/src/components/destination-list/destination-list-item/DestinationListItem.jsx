function DestinationListItem({
    title,
    discount,
    imageUrl,
    _id
}) {
    return (
        <a className="position-relative d-block overflow-hidden" href="">
            <img className="img-fluid" src={imageUrl} alt="" />
            <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">{discount}% OFF</div>
            <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">{title}</div>
        </a>
    )
}

export default DestinationListItem;