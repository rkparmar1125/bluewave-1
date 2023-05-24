'use client';
import Image from "next/image";
import Link from "next/link";
const  Message = require("../../data/Home/Casestudy");
import CaseStudyImage from "../../public/images/Casestudy/case-study.png";
const Casestudy = () =>{
    return(
        <>
            <div className="case-study-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>{Message.TITLE}</h2>
                            <div className="col-6">
                                <Image 
                                    src={CaseStudyImage}
                                    alt="Case Study Image" /> 
                            </div>
                            <div className="col-6">
                                <h5>{Message.RIGHT_TITLE}</h5>
                                <h3>{Message.RIGHT_SUB_TITLE}</h3>
                                <p>{Message.RIGHT_CONTENT}</p>
                                <Link href="/" className="btn">{Message.BTN}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Casestudy;