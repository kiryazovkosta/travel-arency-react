import { useEffect, useState } from "react";

import ProcessItem from "./process-item/ProcessItem";

import * as processService from '../../services/processService'

function Process() {

    const [processes, setProcesses] = useState([]);

    useEffect( () => {
        processService.getAll()
            .then(setProcesses);
    }, [])

    console.log(processes);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Process</h6>
                    <h1 className="mb-5">3 Easy Steps</h1>
                </div>
                <div className="row gy-5 gx-4 justify-content-center">
                    {processes.map( (p) => <ProcessItem key={p._id} {...p} />)}
                </div>
            </div>
        </div>
    )
}

export default Process;