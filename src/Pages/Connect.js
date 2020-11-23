import React from "react";
import Footer from "../Widgets/Footer";
import Helmet from "react-helmet";
import logo from "../Images/official.jpg";

const Connect = () => {
    document.title = "Find me on social media or book me for a show"
    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Classick | Find me on social media or book me for a show</title>
                <link rel="canonical" href="https://iamclassick.com/connect"/>


                <meta
                    name="robots"
                    content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
                <link rel="canonical" href="https://www.iamclassick.com/connect"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Find me on social media or book me for a show"/>
                <meta property="og:description"
                      content="Enjoy my catalog online."/>
                <meta property="og:url" content="https://www.iamclassick.com/listen"/>
                <meta property="og:site_name" content="Find me on social media or book me for a show"/>
                <meta property="og:image" content={logo}/>
                <meta property="og:image:secure_url" content="logo"/>
                <meta property="og:image:width" content="1280"/>
                <meta property="og:image:height" content="720"/>
                <meta name="twitter:card" content={logo}/>
                <meta name="keywords" content="Classick Twitter, Classick265, Malawi Hip Hop Music, Malawi Music, Bola Kunthanzi
                Home Grown Africa, Anaconda, Classick, Classick Malawi, Malawi Rap Music, Malawi Rap,
                Malawi Best Rapper, Malawi Hip Hope Best Rapper, Gifted by Classick, Classick Not My Type
                "/>
                <meta name="twitter:description"
                      content="Classick | Find me on social media or book me for a show"/>
                <meta name="twitter:title"
                      content="Find me on social media or book me for a show"/>
                <meta name="twitter:image" content={logo}/>


            </Helmet>
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