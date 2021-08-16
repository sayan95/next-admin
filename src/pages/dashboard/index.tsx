import React from 'react';
import { NextPage } from 'next';

// app component imports
import DashboardLayout from '../../components/app-component/dashboard-layout/dashboard-layout';
import { WithAuth } from '../../components/hoc/with-auth';
import BaseLayout from '../../layouts/base-layout';

const Index = (props:any) => {
    return (
        <BaseLayout pageTitle='dashboard' pageDescription='This is admin app dashboard'>
            <DashboardLayout>
                Admin dashboard- {props.name}
            </DashboardLayout>
        </BaseLayout>
    )
}

export default WithAuth(Index);
