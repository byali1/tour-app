import React, { useState } from 'react';

export default function TourCard({ id, name, info, image, price, notInterested }) {

    const [expanded, setExpanded] = useState(false);
    const btnReadMoreColor = expanded ? 'warning' : 'info';

    const displayInfo = expanded ? info : `${info.substring(0, 400)}...`;

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    return (
        <div className="col-md-6 mb-5">
            {/* Tour Card */}
            <div className="card shadow-sm" style={{ height: '100%', minHeight: '400px' }}>
                {/* Tour Image */}
                <img
                    src={image}
                    className="card-img-top"
                    alt="Tour Image"
                    style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between">
                        {/* Tour Title */}
                        <h5 className="card-title">{name}</h5>
                        {/* Tour Price */}
                        <h5 className="text-end fw-bold"><span className='text-success'>$ {price}</span></h5>
                    </div>
                    {/* Tour Description */}
                    <p className="card-text flex-grow-1">
                        {displayInfo}
                    </p>
                    {/* Buttons */}
                    <div className="text-center">
                        <button className={`btn btn-${btnReadMoreColor} text-white me-2`} onClick={toggleExpanded}>{expanded ? 'Show less' : 'Read more'}</button>
                        <button className="btn btn-dark" onClick={() => notInterested(id)}>Not Interested</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
