import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";

const Listen = () => {
    document.title = "Classick | Listen to some of my music"
    const url = process.env.PUBLIC_URL + "media/";

    const audioList1 = [
        {
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