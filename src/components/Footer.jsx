import 'react';


function Footer() {
    return (
        <footer className="text-light pt-5" style={{ backgroundColor: "#BC6C25" }}>
            <div className="container px-5">
                <div className="row">
                    <div className="col-6 col-lg-4">
                        <h3 className="fw-bold">Assetra</h3>
                        <p className="pt-2">321, Lorem ipsum dolor sit amet</p>
                     
                    </div>
                    <div className="col">
                        <h4>Menu</h4>
                        <ul className="list-unstyled pt-2">
                            <li className="py-1">Home</li>
                            <li className="py-1">Markets</li>
                            <li className="py-1">About us</li>
                            <li className="py-1">Support</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Products</h4>
                        <ul className="list-unstyled pt-2">
                            <li className="py-1">Buy Stock</li>
                            <li className="py-1">Earn Money</li>
                            
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Social</h4>
                        <ul className="list-unstyled pt-2">
                            <li className="py-1">Instagram</li>
                            <li className="py-1">X</li>
                            <li className="py-1">Youtube</li>
                            <li className="py-1">Facebook</li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3 text-lg-end">
                        <h4>Support</h4>
                    </div>
                    
                </div>
                <hr />
                <div className="d-sm-flex justify-content-between py-1">
                    <p> © 2025, Assetra. All Rights Reserved. </p>
                </div>
            </div>
        </footer>

    );
}

export default Footer
