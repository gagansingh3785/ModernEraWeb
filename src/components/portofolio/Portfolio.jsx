import React from 'react'
import "./portfolio.scss"

import img from "../../assets/work1.jpg"

const Portfolio = () => {
  return (
    <section className='portfolio section' id="portfolio">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most recent work</span>

        <div className="portfolio_container container grid">
            <div className='filters_container'>
                <div className='filter filter_selected'>All</div>
                <div className='filter'>Web</div>
                <div className='filter'>App</div>
                <div className='filter'>Design</div>
            </div>
            <div className='projects_container'>
                <div className='project'>
                    <img src={img} alt="project image" className='project_image'/>
                    <div className='project_heading'>Web Design</div>
                    <span className="services_button">
                        Demo
                        <i className='uil uil-arrow-right services_button-icon'></i> 
                    </span>
                </div>
                <div className='project'>
                    <img src={img} alt="project image" className='project_image'/>
                    <div className='project_heading'>Web Design</div>
                    <span className="services_button">
                        Demo
                        <i className='uil uil-arrow-right services_button-icon'></i> 
                    </span>
                </div>
                <div className='project'>
                    <img src={img} alt="project image" className='project_image'/>
                    <div className='project_heading'>Web Design</div>
                    <span className="services_button">
                        Demo
                        <i className='uil uil-arrow-right services_button-icon'></i> 
                    </span>
                </div>
                <div className='project'>
                    <img src={img} alt="project image" className='project_image'/>
                    <div className='project_heading'>Web Design</div>
                    <span className="services_button">
                        Demo
                        <i className='uil uil-arrow-right services_button-icon'></i> 
                    </span>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Portfolio