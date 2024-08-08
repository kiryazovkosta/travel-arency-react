import { Link } from "react-router-dom";

function ReviewsListItem() {
    return (
        <div className="review row g-3">
            <div className="col-md-6">
                <div className="form-floating">
                    <p>2024-08-08 13:18:22</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-floating">
                    <p>Ivan Ivanov</p>
                </div>
            </div>
            <div className="col-12">
                <div className="form-floating">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non impedit itaque soluta possimus, fugiat odit, quod exercitationem consequatur minus,
                        totam iusto sapiente et earum mollitia? Odit quam obcaecati consequuntur excepturi!</p>
                </div>
            </div>
            <div className="col-6">
                <div className="mb-3">
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                </div>
            </div>
            <div className="col-6">
                <div className="d-flex center-buttons mb-2">
                    <Link to="#" className="btn btn-primary" >Edit</Link>
                    <Link to="#" className="btn btn-secondary" >Delete</Link>
                </div>
            </div>
        </div>
    )
}

export default ReviewsListItem;