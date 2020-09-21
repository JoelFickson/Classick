import React from "react";
import Footer from "../Widgets/Footer";

const Stores = () => {
    document.title="Find My Music on Digital Platforms"
    return (
        <>
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