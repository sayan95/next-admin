import React, { Fragment } from 'react';
import Navbar from '../../ui/navbar/navbar';
import SidebarMenu from '../../ui/sidebar-menu/sidebar-menu';

interface Props{
    children: any
}

const DashboardLayout = ({children}:Props) => {
    return (
        <Fragment>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <SidebarMenu/>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {children}
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default DashboardLayout;
