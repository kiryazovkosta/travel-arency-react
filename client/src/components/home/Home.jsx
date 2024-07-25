function Home(){
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">React.js Project Assignment</h6>
                    <h1 className="mb-5">kkiryazov's project</h1>
                </div>

                <div className="row gy-5 gx-4 justify-content-center">
                    <ul>
                        <li>At least 4 different dynacim pages - ( Services, Packages, Team, Process, Destinations  ) </li>
                        <li>Must have specific views - Catalog ( Packages ), Details (PackageDetails) </li>
                        <li>Use React.js for the client-side</li>
                        <li>Communicate to a remote service ( local REST service)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;