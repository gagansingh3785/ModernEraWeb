import React, {useState} from "react";
import "./About.scss"
import GaganImg from "../../assets/Gagan.jpg"
import AbhinavImg from "../../assets/Abhinav.jpeg"
import CV from "../../assets/John-Cv.pdf"
import Info from "./Info";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useEffect } from "react";

const About = () => {
    const [currentSlider1, toggleSlider1] = useState("0")
    const [currentSlider2, toggleSlider2] = useState("0")
    const aboutHeadings = ["About", "Skills"]

    useEffect(() => {
        const elements = document.querySelectorAll(".about_container_pagination")
        for (let i=0; i<2; i++) {
            elements[i].addEventListener("click", changeslider1)
        }
        for (let i=2; i<4; i++) {
            elements[i].addEventListener("click", changeslider2)
        }
    }, [])

    function changeslider1(e){
        toggleSlider1(e.target.id)
    }

    function changeslider2(e){
        toggleSlider2(e.target.id)
    }

    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Us</h2>
            <span className="section_subtitle">Meet Our Team</span>
        
            <div className="about_container container grid">
                <div style={{position: "relative", display: "flex", justifyContent: "center"}}>
                    <img src={GaganImg} alt="" className="about_img" style={{grayScale: "1"}}/>
                    <a download="" href={CV} className="button button--flex" style={{position: "absolute", bottom: "1rem", left:"50%" , transform: "translateX(-50%)"}}>
                            Gaganpreet Singh
                    </a>
                </div>
                

                <Swiper
                    className="about_swiper_container"
                    spaceBetween={50}
                    slidesPerView={1}
                    grabCursor={true}
                    pagination = {{
                        el: ".inner_container",
                        clickable: true,
                        renderBullet: (index, classname) => {
                            return `<span class="${classname} about_container_pagination" id=${index}>${aboutHeadings[index]}</span>`
                        }
                    }}
                    modules={[Pagination]}
                >
                    <div className="about_custom_pagination">
                        <div className="outer_container">
                            <div className="inner_container"></div>
                            <div className="slider_container">
                                <hr width="100%" height="0.2rem"/>
                                <div className={currentSlider1 === "1" ? "slider slider-right" : "slider"} />
                            </div>
                        </div>
                    </div>
                    <SwiperSlide width="100%">
                        <>
                            <Info yearsOfExp={4} projects={15} />

                            <p className="about_description">
                                Looking for a developer who can make the magic happen behind the scenes? Look no further! I am a skilled backend developer with a passion for creating robust, scalable, and secure web applications. Whether it's managing databases or building APIs, I have the expertise to make your project a success. Let's work together to bring your vision to life!
                            </p>
                        </>
                    </SwiperSlide>
                    <SwiperSlide width="100%">
                        <div className="skills_content">
                            <h3 className="skills_title">Backend Developer</h3>

                            <div className="skills_box">
                                <div className="skills_group">
                                    <div className="skills_data">
                                        <i className="bx bx-badge-check"></i>
                                        <div>
                                            <h3 className="skills_name">GO</h3>
                                            <span className="skills_levle">Advanced</span>
                                        </div>
                                    </div>

                                    <div className="skills_data">
                                        <i className="bx bx-badge-check"></i>
                                        <div>
                                            <h3 className="skills_name">Django</h3>
                                            <span className="skills_levle">Advanced</span>
                                        </div>
                                    </div>

                                    <div className="skills_data">
                                        <i className="bx bx-badge-check"></i>
                                        <div>
                                            <h3 className="skills_name">NodeJs</h3>
                                            <span className="skills_levle">Intermediate</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="skills_group">
                                    <div className="skills_data">
                                        <i className="bx bx-badge-check"></i>
                                        <div>
                                            <h3 className="skills_name">PostgreSQL</h3>
                                            <span className="skills_levle">Advanced</span>
                                        </div>
                                    </div>

                                    <div className="skills_data">
                                        <i className="bx bx-badge-check"></i>
                                        <div>
                                            <h3 className="skills_name">Redis</h3>
                                            <span className="skills_levle">Intermediate</span>
                                        </div>
                                    </div>

                                    <div className="skills_data">
                                        <i className="bx bx-badge-check"></i>
                                        <div>
                                            <h3 className="skills_name">Cloud Solutions</h3>
                                            <span className="skills_levle">Advanced</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="about_container container grid" style={{marginTop: "5rem"}}>
                <div style={{position: "relative", display: "flex", justifyContent: "center"}}>
                    <img src={AbhinavImg} alt="" className="about_img" />
                    <a download="" href={CV} className="button button--flex" style={{position: "absolute", bottom: "1rem", left:"50%" , transform: "translateX(-50%)"}}>
                            Abhinav Sharma
                    </a>
                </div>

                <Swiper
                    className="about_swiper_container"
                    spaceBetween={50}
                    slidesPerView={1}
                    grabCursor={true}
                    pagination = {{
                        el: ".inner_container",
                        clickable: true,
                        renderBullet: (index, classname) => {
                            return `<span class="${classname} about_container_pagination" id=${index}>${aboutHeadings[index]}</span>`
                        },
                    }}
                    modules={[Pagination]}
                >
                    <div className="about_custom_pagination">
                        <div className="outer_container">
                            <div className="inner_container"></div>
                            <div className="slider_container">
                                <hr width="100%" height="0.2rem"/>
                                <div className={currentSlider2 === "1" ? "slider slider-right" : "slider"} />
                            </div>
                        </div>
                    </div>
                    <SwiperSlide width="100%">
                        <>
                            <Info yearsOfExp={4} projects={13}/>

                            <p className="about_description">
                                Looking for a frontend developer who can create stunning, user-centric websites? Look no further! With years of experience in HTML, CSS, and JavaScript, I have the skills and expertise to build responsive websites that delight users. Let's work together to bring your project to life and create an unforgettable user experience!
                            </p>
                        </>
                    </SwiperSlide>
                    <SwiperSlide width="100%">
                        <div className="skills_content">
                            <h3 className="skills_title">Frontend Developer</h3>

                            <div className="skills_box">
                                <div className="skills_group">
                                    <div className="skills_data">
                                        <i className="bx bx-badge-check"></i>
                                        <div>
                                            <h3 className="skills_name">Next.js</h3>
                                            <span className="skills_levle">Intermediate</span>
                                        </div>
                                    </div>

                                    <div className="skills_data">
                                        <i className="bx bx-badge-check"></i>
                                        <div>
                                            <h3 className="skills_name">React</h3>
                                            <span className="skills_levle">Advanced</span>
                                        </div>
                                    </div>

                                    <div className="skills_data">
                                        <i className="bx bx-badge-check"></i>
                                        <div>
                                            <h3 className="skills_name">Angular</h3>
                                            <span className="skills_levle">Intermediate</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="skills_group">
                                    <div className="skills_data">
                                        <i className="bx bx-badge-check"></i>
                                        <div>
                                            <h3 className="skills_name">Vue.js</h3>
                                            <span className="skills_levle">Intermediate</span>
                                        </div>
                                    </div>

                                    <div className="skills_data">
                                        <i className="bx bx-badge-check"></i>
                                        <div>
                                            <h3 className="skills_name">Three.js</h3>
                                            <span className="skills_levle">Intermediate</span>
                                        </div>
                                    </div>

                                    <div className="skills_data">
                                        <i className="bx bx-badge-check"></i>
                                        <div>
                                            <h3 className="skills_name">Sass</h3>
                                            <span className="skills_levle">Advanced</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            
        </section>
    )
}

export default About