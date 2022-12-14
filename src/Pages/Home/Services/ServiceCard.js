import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div className="card card-compact w-80 mx-auto my-5 bg-base-100 shadow-xl bg-teal-600">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    description.length > 100 ?
                        <p>{description.slice(0, 100) + '...'} <Link to='/servicedatadetails'><button className="btn btn-xs btn-accent">Details</button></Link> </p>
                        :
                        <p>{description}</p>
                }
                
                <p className='text-2xl font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end mt-4">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Review</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;