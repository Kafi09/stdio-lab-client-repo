import React, { useEffect, useState } from 'react';
import ServiceData from './ServiceData';

const ServiceDataDetails = () => {
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
                <h2 className="text-5xl font-bold">Service Details</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(servicedata => <ServiceData
                        key={servicedata._id}
                        servicedata={servicedata}
                    ></ServiceData>)
                }
            </div>

        </div>
    );
};

export default ServiceDataDetails;