import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import Helmet from "react-helmet";
import logo from "../Images/official.jpg";

const Listen = () => {
    document.title = "Classick | Listen to some of my music"
    const url = process.env.PUBLIC_URL + "media/";

    const audioList1 = [
        {
            name: 'Drive',
            singer: 'Classick',
            cover:
                `${url}artworks/drive.jpg`,
            musicSrc:
                `${url}music/Drive.mp3`,

        },
        {
            name: 'Water ft Achina Gattah Ase & Gwamba',
            singer: 'Classick ',
            cover:
                `${url}artworks/water.jpg`,
            musicSrc:
                `${url}music/Water ft Achina Gattah Ase & Gwamba.mpeg`,

        }, {
            name: 'Sin City ft F5ver',
            singer: 'Classick',
            cover:
                `${url}artworks/sin_city.jpg`,
            musicSrc:
                `${url}music/Sin City.mp3`,

        }, {
            name: 'Anaconda',
            singer: 'Classick',
            cover:
                `${url}artworks/anaconda.jpg`,
            musicSrc:
                `${url}music/Anaconda.mp3`,

        },
        {
            name: 'Bola Kunthanzi',
            singer: 'Classick ft Sticky Stacks',
            cover:
                `${url}artworks/bola.jpg`,
            musicSrc:
                `${url}music/Bola Kunthazi(f. Sticky Stacks) .mp3`,
        },
        {
            name: 'Gifted',
            singer: 'Classick ft. Purple C & Lilia',
            cover:
                `${url}artworks/gifted.jpg`,
            musicSrc:
                `${url}music/Gifted (ft. Purple C & Lilia).mp3`,
        }, {
            name: 'Intro (Not For Long)',
            singer: 'Classick',
            cover:
                `${url}artworks/fnf.jpg`,
            musicSrc:
                `${url}music/Intro (Not For Long).mp3`,
        }, {
            name: 'Not My Type',
            singer: 'Classick ft Third Eye',
            cover:
                `${url}artworks/nmt.jpg`,
            musicSrc:
                `${url}music/Not My Type(ft. Mandela).mp3`,
        },
        {
            name: 'Somebody Knows',
            singer: 'Classick',
            cover:
                `${url}artworks/somebody.jpg`,
            musicSrc:
                `${url}music/Somebody Knows.mp3`,
        },
    ]
    return (
        <div className='col-md-12'>

            <Helmet>
                <meta charSet="utf-8"/>
                <title>Classick | Listen & download music by Classick</title>
                <link rel="canonical" href="https://iamclassick.com/listen"/>


                <meta
                    name="robots"
                    content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
                <link rel="canonical" href="https://www.iamclassick.com/listen"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Listen & download music by Classick"/>
                <meta property="og:description"
                      content="Enjoy my catalog online."/>
                <meta property="og:url" content="https://www.iamclassick.com/listen"/>
                <meta property="og:site_name" content="Listen & download music by Classick"/>
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
                      content="Classick | Listen & download music by Classick "/>
                <meta name="twitter:title"
                      content="Listen & download music by Classick"/>
                <meta name="twitter:image" content={logo}/>


            </Helmet>
            <div className="min-vh-100 d-flex align-items-center col-md-12 mx-auto ">


                <div className="col-md-6 mx-auto Back rounded p-5 ">
                    <h3 className='text-center Some'>Vibe to My Music</h3>
                    <h5 className='text-center White'>
                        Listen to some of my music from my old catalogue
                    </h5>
                </div>


            </div>

            <div className='footer col-md-12'>


                <ReactJkMusicPlayer
                    defaultPlayMode={"shufflePlay"}
                    showMediaSession
                    showThemeSwitch={true}
                    className='footer'
                    mode={"full"}
                    theme={'dark'}
                    spaceBar={true}
                    glassBg={true}
                    defaultPosition={{top: 0, left: 0}}
                    audioLists={audioList1}/>,
            </div>
        </div>
    )
};

export default Listen;