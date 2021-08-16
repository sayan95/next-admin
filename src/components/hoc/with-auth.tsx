import React from 'react';
import axios from '../../../axios.config';
import redirect from '../../redirect';


export const WithAuth = (WrappedComponent: any) => {
    const AuthComponent = (props: any) => {
        return <WrappedComponent {...props}/>
    }

    AuthComponent.getInitialProps = async (ctx:any) => {
        try{
            const res = await axios.get('profile', {
                headers : ctx && ctx.req.headers.cookie ? 
                    {cookie: ctx.req.headers.cookie}:
                    {cookie: null}
            });
            return {
                profile : res.data.data 
            }
        }catch(e){
            redirect(ctx, '/auth/login')
        }

        return {
            profile: null
        }
    }

    return AuthComponent;
}