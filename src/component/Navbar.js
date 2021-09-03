import React from 'react';

export default function Navbar({mode,toggleMode}) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Text Conversions</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${mode==='light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}