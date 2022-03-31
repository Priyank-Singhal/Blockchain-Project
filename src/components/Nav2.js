import React, { useState, useEffect } from 'react'
import './Nav2.css'
import { MDBFooter } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'



const Nav2 = () => {
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(true);
            } else { // if scroll up show the navbar
                setShow(false);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);


    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light active ${show && 'hidden'}`}>
                <div className="container-fluid">
                    {/* Company Logo */}
                    <a className="navbar-brand" href="/">
                        <div className="logo-image">
                            <img src="/images/aviate.png" className="img-fluid" />
                        </div>
                    </a>
                    {/* Toggle Button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" >
                            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                                <i className="fas fa-angle-double-down"></i>
                            </MDBFooter>
                        </span>
                    </button>
                    {/* NavLinks */}
                    <div className="collapse navbar-collapse navbar-default" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 mx-auto my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: 100, background: "rgb(248,249,250)" }}>
                            <li className="nav-item ">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/currencyConverter">Currency Converter</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href='#faq'>FAQs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav2