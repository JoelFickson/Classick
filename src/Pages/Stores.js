import React from "react";
import Footer from "../Widgets/Footer";
import Helmet from "react-helmet";
import logo from "../Images/official.jpg";

const Stores = () => {
    document.title="Find My Music on Digital Platforms"
    return (
        <>

            <Helmet>
                <meta charSet="utf-8"/>
                <title>Classick | Find My Music on Digital Platforms</title>
                <link rel="canonical" href="https://iamclassick.com/stores"/>


                <meta
                    name="robots"
                    content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
                <link rel="canonical" href="https://www.iamclassick.com/stores"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Find My Music on Digital Platforms"/>
                <meta property="og:description"
                      content="CLASSICK is a Malawian renowned artist taking his country by storm"/>
                <meta property="og:url" content="https://www.iamclassick.com/stores"/>
                <meta property="og:site_name" content="Welcome to The Official Website of Classick"/>
                <meta property="og:image" content={logo}/>
                <meta property="og:image:secure_url" content="logo"/>
                <meta property="og:image:width" content="1280"/>
                <meta property="og:image:height" content="720"/>
                <meta name="twitter:card" content={logo}/>
                <meta name="keywords" content="Malawi Hip Hop Music, Malawi Music, Bola Kunthanzi
                Home Grown Africa, Anaconda, Classick, Classick Malawi, Malawi Rap Music, Malawi Rap,
                Malawi Best Rapper, Malawi Hip Hope Best Rapper, Gifted by Classick, Classick Not My Type
                "/>
                <meta name="twitter:description"
                      content="Classick |Find My Music on Digital Platforms "/>
                <meta name="twitter:title"
                      content="Find My Music on Digital Platforms"/>
                <meta name="twitter:image" content={logo}/>


            </Helmet>
            <div className="container">
                <div className="min-vh-100 d-flex align-items-center col-md-12 mx-auto ">

                    <div className="row col">

                        <div className="col-md-10 mx-auto  rounded">

                            <div className="col-md-12 mt-2 Back p-3">
                                <div className="col-md-12">
                                    <h4 className='text-center Some p-2'>Find Me On Digital Music Stores</h4>
                                </div>

                                <p className='text-center'><a target='_blank' href='https://music.apple.com/us/artist/classick/1477498319'>Apple Music: <ion-icon name="paper-plane-outline"></ion-icon> </a></p>
                                <p className='text-center'><a target='_blank' href='https://open.spotify.com/artist/4rQeI7xjC0l34i6QoIXIO2?si=-GFU8x5PQAC7IwvsHCovXg'>Spotify: <ion-icon name="paper-plane-outline"></ion-icon> </a></p>
                                <p className='text-center'><a target='_blank' href='https://music.youtube.com/channel/UCn_abpXfuHecSm6GtLs_bNQ'>Youtube Music: <ion-icon name="paper-plane-outline"></ion-icon> </a></p>
                                <p className='text-center'><a target='_blank' href='https://www.deezer.com/us/artist/1006138'>Deezer: <ion-icon name="paper-plane-outline"></ion-icon> </a></p>
                                <p className='text-center'><a target='_blank' href='https://www.amazon.com/gp/product/B085XKPNDD/?tag=distrokid06-20'>Amazon: <ion-icon name="paper-plane-outline"></ion-icon> </a></p>

                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Stores;