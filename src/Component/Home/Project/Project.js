import React from 'react';
import './Project.css'

const Project = () => {
    return (
        <div className="project">
            <div className="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src="https://i.ibb.co/BKLFH47/20-Converted-2x.png" alt="" />
                    </div>
                    <div class="col-md-6 d-flex align-items-center">
                        <div>
                        <h2>Stay Running & Project</h2>
                        <p className="my-4">
                            It is a long established fact that a reader will be distracted by the <br />
                            readable content of a page when looking at its layout. The point of <br />
                            using Lorem Ipsum is that it has a more-or-less normal distribution <br />
                            of letter.
                        </p>
                        <button className="btn btn-style">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;