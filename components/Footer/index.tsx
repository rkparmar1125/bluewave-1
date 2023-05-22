"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../public/images/Logo/logo.svg";
import MenuData from "../../data/Menu/footer";
const  Message = require("../../data/Footer");

const Footer = () =>{
    
return (
    <>
        <footer className="wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-16 md:pt-20 lg:pt-24" data-wow-delay=".1s"
        >
            <div className="container">
                <div className="md-8">
                    <div className="mb-12 lg:mb-16">
                        {
                            MenuData.map( (menuItem,menuIndex) =>(
                                <div className={`content ${ menuItem.class } `} key={menuItem.id}>
                                    <h2>{menuItem.title}</h2>
                                    <div className={`sub-menu `}>
                                    {
                                        menuItem.submenu ?
                                            menuItem.submenu.map( (subMenuItem,menuIndex) =>(
                                                <Link href={subMenuItem.path?subMenuItem.path:"/"} key={subMenuItem.id}>{subMenuItem.title}</Link>
                                            )
                                        ): ""
                                    }
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="md-4">
                    <Link href="/">
                        <Image src={Logo} alt="Logo" className="w-full" width={150} height={150} />
                    </Link>
                    <Link href="/">
                        <h3>{Message.FOOTER_READY_TO_GROW}</h3>
                    </Link>
                    <h4>{Message.FOOTER_CONTACT_US_TODAY}</h4>
                    <button  className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-black dark:text-white md:h-14 md:w-14"
                        >{Message.FOOTER_GET_STARTED}
                    </button>
                </div>
            </div>
        </footer>
    </>
)

};

export default Footer;