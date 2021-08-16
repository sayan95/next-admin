import redirect from '../../redirect';
import axios from '../../../axios.config';

interface Props{
    name: string
}

export const WithGuest = (WrappedComponent: any) => {
    const GuestComponent = (props: Props) => {
        return <WrappedComponent {...props}/>
    }

    GuestComponent.getInitialProps = async (ctx:any) =>{
        try{
            const res = await axios.get('profile', {
                headers: ctx && ctx.req.headers.cookie ?
                    {cookie: ctx.req.headers.cookie}:
                    {cookie: null}
            });
            redirect(ctx, '/dashboard');
            return {
                profile : res.data.data
            }
        }catch(e){
            console.log('from withguest hoc'+ e );
        }

        return {
           profile: null
        }
    }

    return GuestComponent;
}   