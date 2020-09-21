import React from "react";
import {Link} from "react-router-dom";


const NavBar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg transparent navbar-light bg-light">
                <Link className="navbar-brand TransformWhite Upper" to="/">Classick <sup>
                    <ion-icon name="musical-note-outline"/>
                </sup></Link>
                <button className="navbar-toggler" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <ion-icon className='Menu' name="apps-outline"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/connect">Connect</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/stores">Music Stores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/listen">Listen & Download</Link>
                        </li>


                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;