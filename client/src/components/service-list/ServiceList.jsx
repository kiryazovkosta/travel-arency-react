import { useEffect, useState } from 'react';
import * as servicesService from '../../services/serviceService';
import ServiceListItem from './service-list-item/ServiceListItem';

function ServiceList() {

    const [services, setServices] = useState([]);

    useEffect(() => {
        servicesService.getAll()
            .then(setServices);
    }, []);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                    <h1 className="mb-5">Our Services</h1>
                </div>
                <div className="row g-4">
                    {services.map( (service) => <ServiceListItem key={service._id} {...service} />)}
                </div>
            </div>
        </div>
    )
}

export default ServiceList;