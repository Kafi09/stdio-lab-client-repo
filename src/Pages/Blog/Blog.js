import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-2xl'>Q1:Difference between SQL and NoSQL.</h1>
            <p className='text-xl'>Ans: 
                SQL:
                
                Data Storage Model: Tables with fixed rows and columns.
                
                Development History: Developed in the 1970s with a focus on reducing data duplication.
                
                Examples: Oracle, MySQL, Microsoft SQL Server, and PostgreSQL. 
                NoSQL:
                
                Data Storage Model:
                Tables with fixed rows and columns
                Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns, Graph: nodes and edges. 
                Development History:
                Developed in the 1970s with a focus on reducing data duplication
                Developed in the late 2000s with a focus on scaling and allowing for rapid application change driven by agile and DevOps practices. 
                Examples:
                Oracle, MySQL, Microsoft SQL Server, and PostgreSQL
                Document: MongoDB and CouchDB, Key-value: Redis and DynamoDB, Wide-column: Cassandra and HBase, Graph:

            </p> 
            <h1 className='text-2xl'>Q2:What is JWT, and how does it work?</h1>
            <p className='text-xl'>Ans: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.This information can be verified and trusted because it is digitally signed.
            </p>

            <h1 className='text-2xl'>Q3:What is the difference between javascript and NodeJS?</h1>
            <p className='text-xl'>Ans: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
            </p>

            <h1 className='text-2xl'>Q4:How does NodeJS handle multiple requests at the same time?</h1>
            <p className='text-xl'>Ans: NodeJS handle multiple client requests. NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
            </p>
            
            
            
        </div>
    );
};

export default Blog;