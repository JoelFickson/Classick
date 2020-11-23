import React from "react";
import Footer from "../Widgets/Footer";
import Helmet from "react-helmet";
import logo from "../Images/official.jpg"

const Home = () => {
    document.title = "Classick | Welcome to The Official Website of Classick"

    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Classick | Welcome to The Official Website of Classick</title>
                <link rel="canonical" href="https://iamclassick.com/"/>


                <meta
                    name="robots"
                    content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
                <link rel="canonical" href="https://www.iamclassick.com"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Welcome to The Official Website of Classick"/>
                <meta property="og:description"
                      content="CLASSICK is a Malawian renowned artist taking his country by storm"/>
                <meta property="og:url" content="https://www.iamclassick.com"/>
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
                      content="Classick |CLASSICK is a Malawian renowned artist taking his country by storm "/>
                <meta name="twitter:title"
                      content="CLASSICK is a Malawian renowned artist taking his country by storm | Home"/>
                <meta name="twitter:image" content={logo}/>


            </Helmet>
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