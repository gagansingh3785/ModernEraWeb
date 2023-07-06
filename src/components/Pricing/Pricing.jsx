import React, {useState} from "react"
import "./pricing.scss"
import 'swiper/swiper-bundle.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from "swiper";
import {CheckIcon, ClockIcon, CrossIcon, ResetIcon} from "../../utils/svg";

const Pricing = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const pricingOptions = [
        {
            title: "Bug Fix or Feature Addition",
            description: "We will fix any bug in you app We will add a new feature in web app",
            price: "10,000",
            deliveryDays: "2",
            revisions: "1",
            features: [
                {
                    label: "Functional website",
                    value: true
                },
                {
                    label: "1 page",
                    value: true
                },
                {
                    label: "Content upload",
                    value: false
                },
                {
                    label: "3 plugins/extensions",
                    value: false
                },
                {
                    label: "E-commerce functionality",
                    value: false
                },
                {
                    label: "10 products",
                    value: false
                },
                {
                    label: "Payment processing",
                    value: false
                },
                {
                    label: "Opt-in form",
                    value: false
                },
                {
                    label: "Autoresponder integration",
                    value: false
                },
                {
                    label: "Speed optimization",
                    value: false
                },
                {
                    label: "Hosting setup",
                    value: false
                },
                {
                    label: "1 Commercially licensed image",
                    value: true
                },
                {
                    label: "Social media icons",
                    value: true
                },
            ]
        },
        {
            title: "Standard Full Stack Application",
            description: "We will create a responsive frontend and scalable backend for your application",
            price: "20,000",
            deliveryDays: "7",
            revisions: "2",
            features: [
                {
                    label: "Functional website",
                    value: true
                },
                {
                    label: "1 page",
                    value: true
                },
                {
                    label: "Content upload",
                    value: true
                },
                {
                    label: "3 plugins/extensions",
                    value: true
                },
                {
                    label: "E-commerce functionality",
                    value: true
                },
                {
                    label: "10 products",
                    value: true
                },
                {
                    label: "Payment processing",
                    value: true
                },
                {
                    label: "Opt-in form",
                    value: true
                },
                {
                    label: "Autoresponder integration",
                    value: true
                },
                {
                    label: "Speed optimization",
                    value: true
                },
                {
                    label: "Hosting setup",
                    value: true
                },
                {
                    label: "1 Commercially licensed image",
                    value: true
                },
                {
                    label: "Social media icons",
                    value: true
                },
            ]
        },
        {
            title: "Premium Full Stack Application",
            description: "We will create a responsive frontend and scalable backend for your application",
            price: "45,000",
            deliveryDays: "14",
            revisions: "3",
            features: [
                {
                    label: "Functional website",
                    value: true
                },
                {
                    label: "1 page",
                    value: true
                },
                {
                    label: "Content upload",
                    value: true
                },
                {
                    label: "3 plugins/extensions",
                    value: true
                },
                {
                    label: "E-commerce functionality",
                    value: true
                },
                {
                    label: "10 products",
                    value: true
                },
                {
                    label: "Payment processing",
                    value: true
                },
                {
                    label: "Opt-in form",
                    value: true
                },
                {
                    label: "Autoresponder integration",
                    value: true
                },
                {
                    label: "Speed optimization",
                    value: true
                },
                {
                    label: "Hosting setup",
                    value: true
                },
                {
                    label: "1 Commercially licensed image",
                    value: true
                },
                {
                    label: "Social media icons",
                    value: true
                },
            ]
        }
    ]

    return (
        <div className={"pricing-main-container"} id="prices">
            <h2 className="section_title">Pricing</h2>
            <span className="section_subtitle">See our plans</span>
            <div className={"outer-scroll-container"}>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView="auto"
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: "bullets",
                        clickable: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: "auto"
                        },
                    }}
                    modules={[Pagination]}
                    className="pricing-swiper"
                >
                    {pricingOptions?.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className={"card-outer-container"}>
                                <div className={"title-container"}>
                                    <div className={"main-title"}>
                                        {item?.title}
                                    </div>
                                    <div className={"description-container"}>
                                        {item?.description}
                                    </div>
                                </div>
                                <div className={"stats-container"}>
                                    <div className={"price "}>
                                        <span className={"rupee-symbol"}>₹</span> {item?.price}
                                    </div>
                                    <div className={"delivery-days"}>
                                        <ClockIcon />
                                        {item?.deliveryDays} Days Delivery
                                    </div>
                                    <div className={"revisions"}>
                                        <ResetIcon />
                                        {item?.revisions} Revision
                                    </div>
                                </div>
                                <hr/>
                                <div className={"features-container"}>
                                    <div className={"feature-comparison"}>
                                        Top feature comparison
                                    </div>
                                    <div className={"features-inner-container"}>
                                        {item?.features?.map((feature, idx) => (
                                            <div className={"feature-item"}>
                                                {feature?.value ? <CheckIcon fill={"rgb(0, 176, 144)"} /> : <CrossIcon fill={"rgb(252, 81, 133)"} />}
                                                {feature?.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {/* <SwiperSlide>Slide 4</SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    )
}

export default Pricing
