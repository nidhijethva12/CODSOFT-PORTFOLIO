import React, { useRef } from 'react';
import profile from '../images/picture_2.png'
import waste_1 from '../images/food_waste_1.png';
import background_2 from '../images/background-2.jpg';
import resume from '../resume/resume.pdf'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const Home = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        try {
            emailjs
                .sendForm('service_r7e30s7', 'template_90qeeri', form.current, '4fUG4yOqqxrMPbaqU')
                .then(
                    () => {
                        Swal.fire('Sent !', "Message has been sent successfully", 'success');
                        form.current.reset();
                    },
                    (error) => {
                        console.log(error);
                        Swal.fire('Error !', 'Something went wrong', 'error');
                    },

                );
        } catch (error) {
            console.log(error);
        }
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Nidhi_Jethva_Resume.pdf';
        link.click();
    }

    return (
        <>
            {/* INTRODUCTION */}
            <div className="text-center py-5 bg-dark text-light" id="home">
                <h1 className="display-4 mb-3"><strong>Nidhi B. Jethva</strong></h1>
                <p className="lead">
                    <strong>
                        Hi, I'm Jethva Nidhi, a passionate developer with experience building web applications.
                    </strong>
                </p>
            </div>
            <img src={profile} className="img-fluid rounded mt-2" alt="background-1" />
            <hr />

            {/* ABOUT SECTION */}
            <section id="about" className="py-5 bg-light text-dark">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4">
                            <img src={background_2} className="img-fluid rounded" alt="about-background" />
                        </div>
                        <div className="col-md-6">
                            <h2>About Me</h2>
                            <strong>
                                Turning Ideas into Reality, One Line of Code at a Time.
                            </strong>
                            <p>
                                I am a web developer with a strong focus on building innovative and efficient digital solutions. With expertise in JavaScript, React, and other cutting-edge web technologies, I bring a problem-solving mindset to every project, consistently striving to push the boundaries of what is possible.
                            </p>
                            <p>
                                I thrive on new challenges, continuously honing my skills to stay at the forefront of industry trends. My core objective is to develop web experiences that are not only highly functional but also aesthetically pleasing and user-centric. By blending form and function, I aim to make the digital world more accessible, seamless, and enjoyable for users across all platforms.
                            </p>
                            <a href="#projects" className="btn btn-dark mt-3">View My Projects</a>
                            <button className="btn btn-dark ms-3 mt-3" onClick={handleDownload}>Download Resume</button>
                        </div>
                    </div>
                </div>
            </section>
            <hr />

            {/* EDUCATION SECTION */}
            <section id="education" className="py-5 bg-dark text-light rounded">
                <div className="container">
                    <h2 className="text-center mb-4">Education</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Class X</h3>
                            <h6>Shree Universal School, Rajkot | March 2020</h6>
                            <h6>Grade - <i>96.94 PR</i></h6> <hr />
                        </div>
                        <div className="col-md-6">
                            <h3>Diploma In Computer Engineering</h3>
                            <h6>A. V. Parekh Technical Institute, Rajkot | 2020 - 2023 | GTU Associated</h6>
                            <h6>Grade - <i>9.64 CPI</i></h6> <hr />
                        </div>
                        <div className="col-md-6">
                            <i><mark>Pursuing</mark></i>
                            <h3 className='mt-1'>Degree In Computer Engineering</h3>
                            <h6>VVP Engineering College, Rajkot | 2023 - 2026 | GTU Associated</h6>
                            <h6>Grade - <i>8.63 CPI</i></h6>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            
            {/* SKILLS SECTION */}
            <section id="skills" className="py-5 bg-dark text-light rounded">
                <div className="container">
                    <h2 className="text-center mb-4">Skills</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Programming Languages</h3>
                            <ul>
                                <li>HTML / CSS</li>
                                <li>JavaScript</li>
                                <li>Java</li>
                            </ul>
                            <hr />
                        </div>
                        <div className="col-md-6">
                            <h3>Frameworks & Libraries</h3>
                            <ul>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Bootstrap</li>
                            </ul>
                            <hr />
                        </div>
                        <div className="col-md-6">
                            <h3>Databases & Tools</h3>
                            <ul>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                            </ul>
                            <hr />
                        </div>
                        <div className="col-md-6">
                            <h3>Soft Skills</h3>
                            <ul>
                                <li>Problem-solving</li>
                                <li>Teamwork</li>
                                <li>Adaptability</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <hr />


            {/* PROJECTS SECTION */}
            <section id="projects" className="py-5 rounded bg-light text-dark">
                <div className="container">
                    <h2 className="text-center mb-4">Projects</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-8 mb-4">
                            <h4 className="mb-4 text-center">Waste Management System</h4>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <img src={waste_1} className="img-fluid rounded" alt="Waste Management System" />
                                </div>
                                <div className="col-md-6" style={{ textAlign: 'justify' }}>
                                    <p>
                                        The "Waste Management System" is an interactive web platform developed using HTML, CSS, PHP and MySQL, designed to address the growing waste management challenges in urban areas. This system enables users to register for scheduled waste collection directly from their homes and fosters community participation in maintaining city cleanliness. Users can collaborate with the system by submitting photos of unclean areas, prompting the cleaning team to take action. After the cleanup, before-and-after photos are uploaded to showcase the improvement.
                                    </p>
                                    <p>
                                        In addition to collecting waste, the system also promotes the recycling of collected materials, contributing to environmental sustainability. By facilitating seamless communication between citizens and the waste management team, the project offers an efficient, scalable solution to waste management and urban cleanliness.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />

            {/* CONTACT SECTION */}
            <section id="contact" className="py-5 bg-dark text-light rounded">
                <div className="container">
                    <h2 className="text-center mb-4">Contact Me</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name"
                                    maxLength={50}
                                    name="from_name"
                                    autoComplete='off'
                                    required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email"
                                    maxLength={50}
                                    name="from_email"
                                    autoComplete='off'
                                    required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"
                                    maxLength={500}
                                    name="message"
                                    autoComplete='off'
                                    required />
                                </div>
                                <button type="submit" className="btn btn-light mt-3">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <hr />

        </>
    );
};

export default Home;
