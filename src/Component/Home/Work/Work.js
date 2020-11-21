import React from 'react';
import './Work.css'

const Work = () => {
    return (
        <div className="work">
            <div className="container">
                <div className="text-center py-5">
                    <h2 className="font-weight-bold">What we do</h2>
                    <p>Our main focus is to make the User Experience very <br />
                simple and easy. Simplicity is our Strength.</p>
                </div>
                <div className="row my-5" >
                    <div className="col-md-3 text-center py-4 border-design" >
                        <img className="mb-3" src="https://i.ibb.co/ZWH6Z55/Group-65-2x.png" alt="" />
                        <h5>Experience Design </h5>
                        <p>The point of using Lorem <br />
                        Ipsum is that it has a more- <br />  
                        orless normal.
                        </p>
                    </div>
                    <div className="col-md-3 text-center py-4 border-design">
                        <img className="mb-3" src="https://i.ibb.co/wRM6PdY/Group-66-2x.png" alt="" />
                        <h5>Interface Design</h5>
                        <p>The point of using Lorem <br />
                        Ipsum is that it has a more- <br />
                        orless normal.
                        </p>
                    </div>
                    <div className="col-md-3 text-center py-4 border-design">
                        <img className="mb-3" src="https://i.ibb.co/XFP0PR1/Group-69-2x.png" alt="" />
                        <h5>Prototyping</h5>
                        <p>The point of using Lorem <br />
                        Ipsum is that it has a more- <br />
                        orless normal.
                        </p>
                    </div>
                    <div className="col-md-3 text-center py-4 border-design">
                        <img className="mb-3" src="https://i.ibb.co/kxmqpks/Group-72-2x.png" alt="" />
                        <h5>Illustration</h5>
                        <p>The point of using Lorem <br />
                        Ipsum is that it has a more- <br />
                        orless normal.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;