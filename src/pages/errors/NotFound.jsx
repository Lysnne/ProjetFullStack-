import React from 'react';

function NotFound() {
    return (
        <div className="text-center p-4">
            <img 
                src="/images/broken-coin.png" alt="notfoundimage" className="mx-auto mb-4" />
            <h1 className="font-bold">404: Investment Not Found</h1>
            <p>This page went bankrupt. Please diversify your clicks elsewhere.</p>
        </div>
    );
}

export default NotFound;
