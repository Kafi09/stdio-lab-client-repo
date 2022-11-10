import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/Services/ServiceCard';

const ServiceDetails = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://stdio-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);

    return (
        <div>
            <div className='text-center mb-6 mt-10'>
                <h2 className="text-5xl font-bold">Our Services</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center my-5'>
                <button className="btn btn-primary">See More Services</button>
            </div>
        </div>
    );
};

export default ServiceDetails;