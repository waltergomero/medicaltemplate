import React from "react";
import Link from "next/link";

const MainMenu = () => {
    return (
        <nav>
            <ul className="main-menu">
                <li className="active">
                    <Link className="main-menu-link" href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className="main-menu-link"
                        href="/service"
                    >
                        Services
                    </Link>
                    <ul className="sub-menu">
                        <li>
                            <Link
                                className="sub-menu-link"
                                href="/service"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="sub-menu-link"
                                href={"/service/service-details/1"
                                }
                            >
                                Service Details
                            </Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link
                        className="main-menu-link"
                        href="/blog"
                    >
                        Blog
                    </Link>
                    <ul className="sub-menu">
                        <li>
                            <Link
                                className="sub-menu-link"
                                href="/blog"
                            >
                                Blog list
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="sub-menu-link"
                                href="/blog-details/1"
                            >
                                Blog Details
                            </Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link
                        className="main-menu-link"
                        href="/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className="main-menu-link"
                        href="/contact"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
