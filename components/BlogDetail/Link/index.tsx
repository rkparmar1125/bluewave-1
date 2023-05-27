"use client";
import Image from "next/image";
import Link from "next/link";
import IconContent from "../../../data/Blogcontent/Icon";
const Message = require("../../../data/Blogcontent/Content");
const BlogLink = () => {
    return(
        <>
            <div className="link-sec" >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>{Message.Link_TITLE}</h2>
                            <Link href="/" >{Message.Link_MENU1}</Link>
                            <Link href="/" >{Message.Link_MENU2}</Link>
                            <Link href="/" >{Message.Link_MENU3}</Link>
                            <Link href="/" className="selected">{Message.Link_MENU4}</Link>
                            <Link href="/" >{Message.Link_MENU5}</Link>
                            <Link href="/" >{Message.Link_MENU6}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default BlogLink;