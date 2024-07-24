import { useEffect, useState } from "react";

import * as packageService from '../../services/packageService'
import PackageListItem from "./package-list-item/PackageListItem";

function PackageList() {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        packageService.getAll()
            .then(result => setPackages(result));
    }, []);

    const chunkArray = (array, chunkSize) => {
        if (!Array.isArray(array)) {
            return [];
        }

        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        
        return chunks;
    };

    const chunkedPackages = chunkArray(packages, 3);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
                    <h1 className="mb-5">Awesome Packages</h1>
                </div>

                {chunkedPackages.map((chunk, chunkIndex) => (
                    <div className="row g-4 justify-content-center" key={chunkIndex} style={{padding: "6px"}}>
                        {chunk.map((record, recordIndex) => (
                            <PackageListItem key={record._id} {...record} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PackageList;