import React, { Fragment } from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <Fragment>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link href='/'>
                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
                        Company name
                    </a>
                </Link>
                
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a href='#' className="nav-link px-3">Sign out</a>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Navbar;
