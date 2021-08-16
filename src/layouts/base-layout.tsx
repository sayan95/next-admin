import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

interface Props{
    children: any;
    pageTitle: string;
    pageDescription:string;
}

const BaseLayout = ({children, pageTitle, pageDescription}: Props) => {
    return (
        <Fragment>
            <Head>
                <title>Next admin - {pageTitle}</title>
                <meta name='description' content={pageDescription}/>
            </Head>
            <div>
                {children}
            </div>
        </Fragment>
    )
}

export default BaseLayout
