import React, { useState } from 'react'
import "./Services.css"

const Services = () => {
    const [toggleState, SetToggleState] = useState(0)
    
    const toggleTab = (index) => {
        SetToggleState(index)
    }

  return (
    <section className='services section' id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What we offer</span>
    
        <div className="services_container container grid">

            <div className='category_container'>
                <div className='category_heading'>Frontend</div>
                <div className='category_content'>
                    <div className='services_content'>
                        <div>
                            <i className='uil uil-web-grid services__icon'></i>
                            <h3 className="services_title">Website <br /> Development</h3>
                        </div>

                        <span className="services_button" onClick={() => toggleTab(1)}>
                            View More
                            <i className='uil uil-arrow-right services_button-icon'></i> 
                        </span>

                        <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className='uil uil-times services_modal-close' onClick={() => toggleTab(0)}></i>
                            <h3 className='services_modal-title'>Website Development</h3>
                            <p className='services_modal-description'>
                                From simple landing pages to complex web applications, we can build responsive and user-friendly websites that meet your needs.
                            </p>

                            <ul className='services_modal-services grid'>
                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle services_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        Custom website design and development using framework suitable for your needs.
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle services_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        Responsive web design for optimal viewing experience across all devices.
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle services_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        Code optimization and minification to reduce file sizes and decrease load time.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className='services_content'>
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className="services_title">Ui/Ux <br /> Design</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(2)}>
                        View More
                        <i className='uil uil-arrow-right services_button-icon'></i> 
                    </span>
                        <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                            <div className="services_modal-content">
                                <i className='uil uil-times services_modal-close' onClick={() => toggleTab(0)}></i>
                                <h3 className='services_modal-title'>Ui/Ux Design</h3>
                                <p className='services_modal-description'>
                                    We will work with you to create stunning user interfaces and intuitive user experiences that help your business stand out from the competition.
                                </p>

                                <ul className='services_modal-services grid'>
                                    <li className='services_modal-service'>
                                        <i className='uil uil-check-circle services_modal-icon'></i>
                                        <p className='services_modal-info'>
                                            Wireframing and prototyping.
                                        </p>
                                    </li>

                                    <li className='services_modal-service'>
                                        <i className='uil uil-check-circle services_modal-icon'></i>
                                        <p className='services_modal-info'>
                                            Design system creation for consistency across web applications.
                                        </p>
                                    </li>

                                    <li className='services_modal-service'>
                                        <i className='uil uil-check-circle services_modal-icon'></i>
                                        <p className='services_modal-info'>
                                            Usability testing to improve user experience.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='services_content'>
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className="services_title">CMS <br /> Integration</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(3)}>
                        View More
                        <i className='uil uil-arrow-right services_button-icon'></i> 
                    </span>

                    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className='uil uil-times services_modal-close' onClick={() => toggleTab(0)}></i>
                            <h3 className='services_modal-title'>CMS integration</h3>
                            <p className='services_modal-description'>
                                With our CMS integration services, you can say goodbye to the hassle of manual content updates and hello to a more streamlined website management experience.
                            </p>

                            <ul className='services_modal-services grid'>
                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle services_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        Create a custom CMS tailored to your specific business needs.
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle services_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        Migrate to a newer and more efficient system, minimizing disruption to your website.
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle services_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        Develop custom plugins to add out-of-the-box functionality.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='category_container'>
                <div className='category_heading'>Backend</div>
                <div className='category_content'>
                    <div className='services_content'>
                        <div>
                            <i className='uil uil-web-grid services__icon'></i>
                            <h3 className="services_title">Database <br /> Design</h3>
                        </div>

                        <span className="services_button" onClick={() => toggleTab(4)}>
                            View More
                            <i className='uil uil-arrow-right services_button-icon'></i> 
                        </span>

                        <div className={toggleState === 4 ? "services_modal active-modal" : "services_modal"}>
                            <div className="services_modal-content">
                                <i className='uil uil-times services_modal-close' onClick={() => toggleTab(0)}></i>
                                <h3 className='services_modal-title'>Database Design</h3>
                                <p className='services_modal-description'>
                                    From designing schema to fine-tuning queries, we are the go-to expert for all things database. Get ready to see your data-driven dreams come true!
                                </p>

                                <ul className='services_modal-services grid'>
                                    <li className='services_modal-service'>
                                        <i className='uil uil-check-circle services_modal-icon'></i>
                                        <p className='services_modal-info'>
                                            Experience with Relational Databases like PostgreSQL.
                                        </p>
                                    </li>

                                    <li className='services_modal-service'>
                                        <i className='uil uil-check-circle services_modal-icon'></i>
                                        <p className='services_modal-info'>
                                            Experience with in-memory databases for lower latency.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='services_content'>
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className="services_title">API <br /> Design</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(5)}>
                        View More
                        <i className='uil uil-arrow-right services_button-icon'></i> 
                    </span>

                    <div className={toggleState === 5 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className='uil uil-times services_modal-close' onClick={() => toggleTab(0)}></i>
                            <h3 className='services_modal-title'>API Design</h3>
                            <p className='services_modal-description'>
                                Whether it is HTTP or gRPC, we respond 200 for both. Designing modular APIs for complex micro-service infrastructure is a piece of cake for us.
                            </p>

                            <ul className='services_modal-services grid'>
                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle services_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        Scalable and Modular API design.
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle services_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        Rate limiting for excessive load.
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle services_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        Timeout and retrial implementation.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className='services_content'>
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className="services_title">Cloud <br /> Solutions</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(6)}>
                        View More
                        <i className='uil uil-arrow-right services_button-icon'></i> 
                    </span>

                    <div className={toggleState === 6 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className='uil uil-times services_modal-close' onClick={() => toggleTab(0)}></i>
                            <h3 className='services_modal-title'>Cloud Solutions</h3>
                            <p className='services_modal-description'>
                                Want the world to enjoy your amazing creation, look no further we will help you host your application for the world to see.
                            </p>

                            <ul className='services_modal-services grid'>
                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle services_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        Hosting solutions on cloud providers like GCP, AWS and more.
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle services_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        Experience in deploying on VMs.
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle services_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        Experience in deploying on Containers.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services