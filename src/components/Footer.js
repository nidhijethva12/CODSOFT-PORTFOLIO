import React from 'react';
import GitHub from '../icons/githubIcon.png';
import Email from '../icons/gmailIcon.png';
import LinkedIn from '../icons/linkedinIcon.png';

const Footer = () => {

    return (
        <footer className="bg-dark text-light pt-5">
            <div className="container">
                <div className="row justify-content-evenly text-center text-md-start">

                    {/* Follow Me Section */}
                    <div className="col-md-4 mb-4">
                        <div className="p-3 bg-secondary rounded">
                            <h5 className='text-center'>Follow Me</h5>
                            <div className="d-flex justify-content-center align-items-center">
                                <img onClick={() => window.location.href = 'mailto:nidhijethva12@gmail.com'} src={Email} className="mt-1 me-1" width={47} height={47} alt="..." style={{ cursor: 'pointer' }} />

                                <img src={LinkedIn} onClick={() => window.open('https://www.linkedin.com/in/nidhi-jethva-756432327/', '_blank')} width={63} height={63} alt="..." style={{ cursor: 'pointer' }} />

                                <img onClick={() => window.open('https://github.com/nidhijethva12', '_blank')} src={GitHub} width={60} height={60} alt="..." style={{ cursor: 'pointer' }} />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <p className="mb-3">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
