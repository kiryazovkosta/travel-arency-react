import { useEffect, useState } from "react";

import DestinationLastItem from "./destination-list-item/DestinationLastItem";
import DestinationListItem from "./destination-list-item/DestinationListItem";

import * as destinationService from '../../services/destinationService';

function DestinationList() {

    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        destinationService.getAll()
            .then(setDestinations)
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

    // Chunk the destinations array into arrays of 4 items each
    const chunkedDestinations = chunkArray(destinations, 4);

    return (
        <div className="container-xxl py-5 destination">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
                    <h1 className="mb-5">Popular Destination</h1>
                </div>
                {chunkedDestinations.map((chunk, chunkIndex) => (
                    <div className="row g-3 padding-from-top-10px" key={chunkIndex}>
                        <div className="col-lg-7 col-md-6">
                            <div className="row g-3">
                                {chunk.slice(0, 3).map((destination, index) => (
                                    <div className={`col-lg-${index === 0 ? 12 : 6} col-md-12 wow zoomIn`} data-wow-delay={`${0.1 * (index + 1)}s`} key={destination._id}>
                                        <DestinationListItem key={destination._id} {...destination} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {chunk[3] && (
                            <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: "350px" }}>
                                <DestinationListItem key={chunk[3]._id}  {...chunk[3]} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DestinationList;