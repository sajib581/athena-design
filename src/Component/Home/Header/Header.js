import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Nav></Nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1 className="display-3 font-weight-bold mb-5">Florence <br />agency</h1>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.</p>
                            <button className="btn mt-3 btn-style">See priceing</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="header-img" src="https://i.ibb.co/2PGVLNc/16-Converted-2x.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;