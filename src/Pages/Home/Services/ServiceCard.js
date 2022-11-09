import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, price, title, description } = service;
    return (
        <div className="card card-compact w-80 mx-auto my-5 bg-base-100 shadow-xl bg-teal-600">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='text-2xl font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">Package Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;