import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    state = {
        asystHref: "https://myaccount.powerstonepm.com/_UserLogin?Mode=Register"
    };

    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-7">
                            <p>
                                <i className="icofont-copyright"></i>{currentYear} All Rights Reserved by Powerstone Property Management
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <ul>
                                <li>
                                    <Link href="https://www.facebook.com/PowerstonePM/">
                                        <a><i className="icofont-facebook"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/powerstonepm/">
                                        <a><i className="icofont-instagram"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/company/powerstone-pm/">
                                        <a><i className="icofont-linkedin"></i></a>
                                    </Link>
                                </li>
                            </ul>
                                <div>
                                    <button className="admin-btn">
                                            <Link href={this.state.asystHref}>
                                                <a
                                                    className="nav-link"
                                                    target="_blank"
                                                >
                                                    Admin
                                                </a>
                                            </Link>
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;