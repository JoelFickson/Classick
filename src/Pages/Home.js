import React from "react";
import Footer from "../Widgets/Footer";

const Home = () => {
    document.title = "Classick | Welcome to The Official Website of Classick"
    return (
        <>
            <div className="min-vh-100 d-flex align-items-center col-md-12 mx-auto ">


                <div className="col-md-6 mx-auto Back rounded p-5 ">
                    <h3 className='text-center Some'>Welcome to my Official Website</h3>
                    <h5 className='text-center White'>
                        CLASSICK is a Malawian renowned artist taking his country by storm. Having toured with Coca-Cola
                        Africa & being voted the most influential musician in Malawi my MTV Base polls, uses an approach
                        that relates music topics topped with a dash of challenging social-political conscious lyrics,
                        hence
                        proving to be a force to reckon in Africa.
                    </h5>
                </div>


            </div>
            <Footer/>
        </>);
};

export default Home;