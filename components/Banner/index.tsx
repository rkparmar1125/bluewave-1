"use client";
import Image from "next/image";
import Link from "next/link";
import LeftSideImage from "../../public/images/Banner/banner-left.png";
import RightSideImage from "../../public/images/Banner/banner-right.png";
const Message = require("../../data/Home/Banner");
const Banner = () => {
    return(
        <>
            <div className="banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Image src={LeftSideImage} alt="Left Img" className="banner-left-img" />
                            <div className="banner-text">
                                <h1 className="">{Message.TITLE}</h1>
                                <p>{Message.FIRST_CONTENT}<br />{Message.SECOND_CONTENT}</p>
                                <Link href="/" className="banner-btn" >{Message.BTN}</Link>
                            </div>
                            <Image src={RightSideImage} alt="Right Img" className="banner-right-img" />
                        </div>
                    </div>
                </div>
                <div className="scroll-down-arrow">
			        <Link href="/" >↓</Link>
                </div>
            </div>
        </>
    )
};
export default Banner;