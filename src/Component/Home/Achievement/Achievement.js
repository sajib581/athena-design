import React from 'react';
import './Achievement.css'

const Achievement = () => {
    return ( 
        <div className="achievement py-5">
        <div className="container ">
            <div className="row">
                <div className="col-md-5">
                    <h2>Our Achievements</h2>
                    <p>It is a long established fact that a reader will be distracted by <br />
                    the readable content of a page when looking at its layout. The <br />
                    point of using Lorem Ipsum is that it has a more-or-less normal <br />
                    distribution of letter.</p>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-5 first-design d-flex p-4 uniq m-3 align-items-center" >
                            <img src="https://i.ibb.co/bBqLn1z/happy-2x.png" alt=""/>
                            <div className="ml-3">
                                <h1>700+</h1>
                                <h6>Happy Clients</h6>
                            </div>
                        </div>
                        <div className="col-md-5 second-design d-flex p-4 m-3 align-items-center">
                            <img src="https://i.ibb.co/sQ3Dcrs/marketing-2x.png" alt=""/>
                            <div className="ml-3">
                                <h1>140+</h1>
                                <h6>Projects Completed</h6>
                            </div>
                        </div>
                        <div className="col-md-5 first-design d-flex p-4 m-3 align-items-center">
                            <img src="https://i.ibb.co/qxDfsjn/surface1-2x.png" alt=""/>
                            <div className="ml-3">
                                <h1>40+</h1>
                                <h6>Crazy Minds</h6>
                            </div>
                        </div>
                        <div className="col-md-5 second-design d-flex p-4 m-3 align-items-center">
                            <img src="https://i.ibb.co/pxDXtdw/transportation-2x.png" alt=""/>
                            <div className="ml-3">
                                <h1>75+</h1>
                                <h6>Running Projects</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Achievement;