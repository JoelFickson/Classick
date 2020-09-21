import React from "react";
import Footer from "../Widgets/Footer";

const Connect = () => {
    document.title="Find me on social media or book me for a show"
    return (
        <>
            <div className="container">
                <div className="min-vh-100 d-flex align-items-center col-md-12 mx-auto ">

                    <div className="row col">
                        <div className="col-md-12">
                            <h4 className='text-center TransformWhite'>Connect With Me</h4>
                        </div>
                        <div className="col-md-6 mx-auto  rounded  ">
                            <div className="col-md-12 mt-2 Back p-3">
                                <h3 className='text-center Some'>For Shows</h3>
                                <h5 className='text-center White'>
                                    Email us at <a href="mailto:bookingclassick@gmail.com">bookingclassick@gmail.com</a>
                                </h5>

                            </div>
                        </div>
                        <div className="col-md-6 mx-auto  rounded ">
                            <div className="col-md-12 p-3 Back mt-2">
                                <h3 className='text-center Some'>Social Media</h3>
                                <p className='text-center White'>
                                    <a href="http://www.facebook.com/Classick265">
                                        <ion-icon name="logo-facebook"/>
                                    </a>

                                    <a className='px-3' href="http://www.twitter.com/Classick265">
                                        <ion-icon name="logo-twitter"/>
                                    </a>

                                    <a href="http://www.instagram.com/Classick265">
                                        <ion-icon name="logo-instagram"/>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Connect;