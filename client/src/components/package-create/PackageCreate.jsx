

function PackageCreate() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Package</h6>
                    <h1 className="mb-5">Create new package</h1>
                </div>
                <div className="row gy-5 gx-4 justify-content-center">
                    <form>
                        <div className="row g-3">

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="title" name="title" placeholder="Package title" />
                                    <label htmlFor="name">Package title</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="duration" name="duration" placeholder="Package duration" />
                                    <label htmlFor="duration">Package duration</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="persons" name="persons" placeholder="Package persons number" />
                                    <label htmlFor="persons">Package persons number</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="price" name="price" placeholder="Package price" />
                                    <label htmlFor="price">Package price</label>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="imageUrl" name="imageUrl" placeholder="Package image" />
                                    <label htmlFor="imageUrl">Package image</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="data-wow-delay" name="data-wow-delay" placeholder="Package data-wow-delay in format 0.5s" />
                                    <label htmlFor="data-wow-delay">Package data-wow-delay in format 0.5s</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Enter a summary" id="summary" name="summary" style={{ height: "100px" }}></textarea>
                                    <label htmlFor="summary">Summary</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Save package</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PackageCreate;