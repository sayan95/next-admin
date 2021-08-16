import React, { ChangeEvent, Fragment, SyntheticEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from '../../../axios.config';

import BaseLayout from '../../layouts/base-layout';
import { WithGuest } from '../../components/hoc/with-guest';

interface Form {
    loading: boolean,
    email: string,
    password: string,
    error? : any
}


const Login = () => {  
    const router = useRouter();
    const deafultform:Form = {
        loading: false,
        email: '',
        password: '',
        error:  ''
    } 

    const [form, setForm] = useState(deafultform);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        redirect && router.push('/dashboard')
    }, [redirect]);


    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const loginHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        setForm({...form, loading: true});
        try{
            console.log('enters login function')
            await axios.post('admin-auth/login', {
                email: form.email,
                password: form.password
            });
            setRedirect(true);
            setForm({...form, loading: true});
        }catch(e){
            setForm({
                ...form, 
                loading: false, 
                error: e.response.data.errors
            });
        }
    }

    return (
        <BaseLayout pageTitle='sign in' pageDescription='admin sign in page' >
            <div className='login-page-container'>
                <main className="form-signin">
                    <form onSubmit={loginHandler}>
                        <img className="mb-4" src="/vercel.svg" alt="react-admin-logo" width="85" height="85"/>
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                            <div className="form-floating">
                                <input type="email" name='email' className={`form-control ${form.error && form.error.email ? 'is-invalid': undefined}`} id="floatingInput" onChange={inputChangeHandler} placeholder='email@abc.com...'/>
                                <label htmlFor="floatingInput">Email address</label>
                                {form.error && form.error.email && <span className='invalid-feedback'>{form.error.email}</span> }
                            </div>

                            <div className="form-floating">
                                <input type="password" name='password' className={`form-control ${form.error && form.error.password ? 'is-invalid': undefined}`} id="floatingPassword" onChange={inputChangeHandler} placeholder='Password'/>
                                <label htmlFor="floatingPassword">Password</label>
                                {form.error && form.error.password && <span className='invalid-feedback'>{form.error.password}</span> }
                            </div>

                            <button disabled={form.loading} className="w-100 btn btn-lg btn-primary" type="submit">
                                {form.loading ? 
                                    <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    <span className="ml-3">Signing in...</span></>   
                                 : <span>Sign up</span> 
                                }
                            </button>
                            <p className="mt-5 mb-3 text-muted text-center">© 2017–2021, React admin</p>
                        </form>
                </main>
            </div>
        </BaseLayout>
    )
}

export default WithGuest(Login);
