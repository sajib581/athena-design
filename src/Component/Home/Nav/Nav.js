import React from 'react';
import './Nav.css'

const Nav = () => {
  return (
    <div>
      <div classNameName="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#"><img width="100px" src="https://i.ibb.co/JzqMz4Z/Group-86.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active mx-3">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active mx-3">
              <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active mx-3">
              <a className="nav-link" href="#">Service <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active mx-3">
              <a className="nav-link" href="#">Priceing <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active mx-3">
              <a className="nav-link" href="#">Our Team <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active mx-3">
              <a className="nav-link btn-style" href="#">Contact us <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Nav;