import 'react';

function Support() {
    return (
        <div>
            <h1>Support</h1>
            <h2>Need help? We’re here for you</h2>
            <div className="row g-4">

                <div className="col-md-2">
                    <div className="card p-3">
                        <h5 className="card-title mb-3">Send us an email</h5>
                        <p className="card-text">If you have any questions or need support, feel free to reach out to us via email. We're here to help!</p>
                        
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card p-3">
                        <h5 className="card-title mb-3">File a complaint</h5>
                        <p className="card-text">If you're unsatisfied with your experience, learn more about ways to file a complaint.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Support;