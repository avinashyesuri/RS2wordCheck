// import React from 'react'
// import { useParams } from 'react-router-dom';
// import data from './dataVal';
// const UserDetails = () => {

//     const { userId } = useParams();
//     const userDetails = data.find((user) => user.id == userId)


//     return (
//         <div className="container">
//             <h1 className="text-center my-4">UsersDetsails</h1>
//             <div className="row">
//                 <div  className="col-lg-4 mb-4">
//                     <div className="card" style={{ width: '18rem' }}>
//                         <ul>
//                             <li> {userDetails.name}</li>
//                             <li> {userDetails.username}</li>
//                             <li> {userDetails.email}</li>
//                             <li> {userDetails.phone}</li>
//                             <li> {userDetails.company.catchPhrase}</li>
//                             <li> {userDetails.address}</li>

//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default UserDetails



import React from 'react';
import { useParams } from 'react-router-dom';
import data from './dataVal';

const UserDetails = () => {
    const { userid } = useParams();   //--- important here usedid is what u have given in the app.js :name

    // Find the user details based on userId
    const userDetails = data.find((user) => user.id === parseInt(userid));

    // Check if userDetails is undefined (no user found)
    if (!userDetails) {
        return (
            <div className="container">
                <h1 className="text-center my-4">User Details</h1>
                <div className="alert alert-danger" role="alert">
                    User not found!
                </div>
            </div>
        );
    }

    // Render user details if userDetails is defined
    return (
        <div className="container">
            <h1 className="text-center my-4">User Details</h1>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <ul>
                                <li>Name: {userDetails.name}</li>
                                <li>Username: {userDetails.username}</li>
                                <li>Email: {userDetails.email}</li>
                                <li>Phone: {userDetails.phone}</li>
                                <li>Company: {userDetails.company.catchPhrase}</li>
                                <li>
                                    Address: {userDetails.address.street}, {userDetails.address.suite},{' '}
                                    {userDetails.address.city} - {userDetails.address.zipcode}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;
