import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import { Paths } from '../../utils/Paths';
import { chunkArray } from '../../utils/Arrays'

import PackageListItem from "../package-list/package-list-item/PackageListItem"

import './SearchResult.css'

function SearchResult() {
    const location = useLocation();
    const navigate = useNavigate();

    const [pattern, setPattern] = useState('');
    const [packages, setPackages] = useState([]);

    const { result, search } = location.state || {};

    useEffect(() => {
        if (!result || !search) {
            navigate(Paths.home);
        }

        setPattern(search);
        setPackages(result);

    }, [result, search, navigate]);

    const chunkedPackages = chunkArray(packages, 3);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Search Result</h6>
                    <h1 className="mb-5">Packages that match your requirement: <span className='search-pattern'>{pattern}</span></h1>
                </div>

                {chunkedPackages && chunkedPackages.length > 0 ? (
                    chunkedPackages.map((chunk, chunkIndex) => (
                        <div
                            className="row g-4 justify-content-center"
                            key={chunkIndex}
                            style={{ padding: "6px" }}
                        >
                            {chunk.map((record, recordIndex) => (
                                <PackageListItem key={record._id} {...record} />
                            ))}
                        </div>
                    ))
                ) : (
                    <div>
                        <h2 className='empty-search-result'>There are no packeges that match your search criteria</h2>
                        <div className='packages-div'><Link to={Paths.packages} className='link-to-packages'>Our awesome packages</Link></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchResult;