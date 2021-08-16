import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const menus:Array<{label: string, href: string}> = [
    {label: 'Dashboard', href: '/dashboard'},
    {label: 'Users', href: '/'},
];


const SidebarMenu = () => {
    const router = useRouter();

    return (
        <Fragment>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        {menus.map(m => (
                            <li key={m.label} className="nav-item">
                                <Link href={m.href}>
                                    <a className={`nav-link ${router.asPath === m.href ? 'active': undefined}`} aria-current="page">
                                        <span data-feather="home"/>
                                        <span>{m.label}</span>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default SidebarMenu
