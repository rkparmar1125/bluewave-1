'use client';
import Image from "next/image";
import Link from "next/link";
import DigitalMarketingImage from "../../../public/images/Digitalmarketing/digital_marketing.png";
const  Message = require("../../../data/Home/Digitalmarketing");
const Digitalmarketing = () =>{
    return(
        <>
            <div className="digital-marketing-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="digital-marketing-con">
                                <h2>{Message.TITLE}</h2>
                                <p>{Message.CONTENT}</p>    
                                <Link href="/" className="btn">{Message.BTN}</Link>
                            </div>
                            <div className="digital-marketing-img">
                                <Image 
                                src={DigitalMarketingImage}
                                 alt="Digital Marketing Image"  /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Digitalmarketing;