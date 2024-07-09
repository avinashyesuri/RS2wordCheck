import React from 'react';
import { Link } from 'react-router-dom';
import data from './dataVal';

const Users = () => {
    return (
        <div className="container">
            <h1 className="text-center my-4">Users</h1>
            <div className="row">
                {data.map((eachUser) => {
                    const { id, name, company } = eachUser;

                    return (
                        <div  className="col-lg-4 mb-4">
                            <Link to={`/users/${id}`} key={id} style={{ textDecoration: 'none' }}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{company.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Users;
