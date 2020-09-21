import React from 'react';
import official from "./Images/67586360_2370058783272516_9012428600762171392_o.jpg";
import './App.css';
import NavBar from "./Navbar/Navbar";

import 'react-jinke-music-player/assets/index.css'
import 'react-h5-audio-player/lib/styles.css';
import {Route} from "react-router-dom";
import Listen from "./Pages/Listen";
import Connect from "./Pages/Connect";
import Home from "./Pages/Home";
import Stores from "./Pages/Stores";


const App = () => {
    return (
        <>

            <NavBar/>


            <Route exact path='/' component={Home}/>
            <Route exact path='/listen' component={Listen}/>
            <Route exact path='/stores' component={Stores}/>
            <Route exact path='/connect' component={Connect}/>


        </>
    );
}

export default App;
