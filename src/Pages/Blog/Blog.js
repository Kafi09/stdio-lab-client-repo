import React from 'react';

const Blog = () => {
    return (
        <div>
            <section>
                <h1 className='text-2xl'>Q1:Difference between SQL and NoSQL.</h1>
                <p className='text-xl'>Ans: <br />
                    SQL:
                    <br />
                    Data Storage Model: Tables with fixed rows and columns.
                    <br />
                    Development History: Developed in the 1970s with a focus on reducing data duplication.
                    <br />
                    Examples: Oracle, MySQL, Microsoft SQL Server, and PostgreSQL. <br /> <br />
                    NoSQL:
                    <br />
                    Data Storage Model:
                    Tables with fixed rows and columns
                    Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns, Graph: nodes and edges. <br />
                    Development History:
                    Developed in the 1970s with a focus on reducing data duplication
                    Developed in the late 2000s with a focus on scaling and allowing for rapid application change driven by agile and DevOps practices. <br />
                    Examples:
                    Oracle, MySQL, Microsoft SQL Server, and PostgreSQL
                    Document: MongoDB and CouchDB, Key-value: Redis and DynamoDB, Wide-column: Cassandra and HBase, Graph:

                </p> <br /> <br />

                


            </section>
        </div>
    );
};

export default Blog;