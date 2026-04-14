import React from 'react';

const FriendDetailsPage = async({params}) => {
    const {id} = await params;
    console.log("params", id)
    return (
        <div>
            <h2>This is the Friend Details Page</h2>
        </div>
    );
};

export default FriendDetailsPage;