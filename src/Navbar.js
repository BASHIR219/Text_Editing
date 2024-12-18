import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props){


    return (
      <>
      <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
            <a className="nav-link text-light" href="/">Contact</a>
            <a className="nav-link text-light" href="/">About</a>
          </div>
        </div>
      </div>
      <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
    </nav>
    </>
    )
}