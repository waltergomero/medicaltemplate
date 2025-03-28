import PropTypes from "prop-types";
import Link from "next/link";
import { getClosest, getSiblings, slideToggle, slideUp } from "@/utils";
import SocialIcon from "@/components/ui/social-icons";

const MobileMenu = ({ show, onClose }) => {
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-expand") ||
            target.classList.contains("menu-expand")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };
    return (
        <div
            className={`offcanvas offcanvas-mobile-menu ${
                show ? "offcanvas-open" : ""
            }`}
        >
            <div className="inner">
                <div className="border-bottom mb-3 pb-3 text-end">
                    <button className="offcanvas-close" onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className="offcanvas-head mb-3">
                    <div className="header-top-offcanvas">
                        <p>
                            <i className="icofont-google-map"></i>{" "}
                            <span>ADDRESS:</span> 568 Elizaberth Str, London, UK
                        </p>
                    </div>
                </div>
                <nav className="offcanvas-menu">
                    <ul>
                        <li>
                            <Link  href="/">
                                <span className="menu-text">Home</span>
                            </Link>
                            <span
                                className="menu-expand"
                                onClick={onClickHandler}
                                aria-hidden="true"
                            ></span>
                            <ul className="offcanvas-submenu">
                                <li>
                                    <Link   href= "/">
                                        Home 1
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href= "/service">
                                <span className="menu-text">Services</span>
                            </Link>
                            <span
                                className="menu-expand"
                                onClick={onClickHandler}
                                aria-hidden="true"
                            ></span>
                            <ul className="offcanvas-submenu">
                                <li>
                                    <Link href= "/service">
                                        Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service/service-detalis" >
                                        service details
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link href= "/blog">
                                <span className="menu-text">blog</span>
                            </Link>
                            <span
                                className="menu-expand"
                                onClick={onClickHandler}
                                aria-hidden="true"
                            ></span>
                            <ul className="offcanvas-submenu">
                                <li>
                                    <Link href="/blog">
                                        Blog list
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/blog-details/1">
                                        Blog details
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link href="/about">
                                about
                            </Link>
                        </li>

                        <li>
                            <Link href= "/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="offcanvas-social my-4">
                    <ul>
                        <li>
                            <SocialIcon
                                path="https://twitter.com/"
                                icon="icofont-twitter"
                            />
                        </li>
                        <li>
                            <SocialIcon
                                path="https://www.facebook.com/"
                                icon="icofont-facebook"
                            />
                        </li>
                        <li>
                            <SocialIcon
                                path="https://www.instagram.com/"
                                icon="icofont-instagram"
                            />
                        </li>
                        <li>
                            <SocialIcon
                                path="https://rss.com/"
                                icon="icofont-rss-feed"
                            />
                        </li>
                        <li>
                            <SocialIcon
                                path="https://www.youtube.com/"
                                icon="icofont-play-alt-1"
                            />
                        </li>
                    </ul>
                </div>

                <ul className="media-wrap">
                    <li className="media media-list">
                        <span className="media-icon">
                            <i className="icofont-clock-time"></i>
                        </span>
                        <div className="media-content">
                            <span className="media-sub-heading">
                                working hours
                            </span>
                            <span className="media-heading">
                                MON - FRI: 9.00 - 21.00{" "}
                            </span>
                        </div>
                    </li>

                    <li className="media media-list">
                        <span className="media-icon">
                            <i className="icofont-ui-call"></i>
                        </span>
                        <div className="media-content">
                            <span className="media-sub-heading">
                                hotline 24/7
                            </span>
                            <a
                                className="media-heading"
                                href="tel:+0962-58-58-258"
                            >
                                +0962-58-58-258
                            </a>
                        </div>
                    </li>

                    <li className="media media-list">
                        <span className="media-icon">
                            <i className="icofont-envelope"></i>
                        </span>
                        <div className="media-content">
                            <span className="media-sub-heading">email us</span>
                            <a
                                className="media-heading"
                                href="mailto:support@clenora.com.uk"
                            >
                                support@clenora.com.uk
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

MobileMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default MobileMenu;
