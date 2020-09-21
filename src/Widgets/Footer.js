import React from "react";

const Footer = () => {
    return (
        <>
            <div className='footer  col-md-12 footerBg'>


                <p className='textDev text-center pt-4'> Developed With by
                    <a className='Developer'
                       target='_blank'
                       href='https://twitter.com/joelfickson'>
                        Joel Fickson Ngozo
                    </a>
                </p>

                <p className='textDev text-center'>Classick {new Date().getFullYear()}</p>
            </div>
        </>
    )
};

export default Footer;