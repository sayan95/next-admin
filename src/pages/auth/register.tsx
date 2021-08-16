import {useRouter} from 'next/router';
import React, { ChangeEvent,SyntheticEvent, useEffect, useState } from 'react'
import axios from '../../../axios.config';


import BaseLayout from '../../layouts/base-layout';

interface Form{
    loading: boolean;
    firstName: string;
    lastName: string;
    email : string;
    password: string;
    passwordConfirm: string;
    error? : any 
}

const Register = () => {
    const router = useRouter();
    const defaultForm:Form = {
        loading: false,
        firstName: '',
        lastName: '',
        email : '',
        password: '',
        passwordConfirm: '',
        error: '',
    }

    const [form, setForm] = useState(defaultForm);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        redirect && router.push('/auth/login');
    }, [redirect]);

    const inputChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value 
        });
    }

    const submitRegisterFormHandler = async (e:SyntheticEvent) => {
        e.preventDefault();
        setForm({...form, loading: true});
        try{
            await axios.post('admin-auth/register', {
                first_name : form.firstName,
                last_name : form.lastName,
                email : form.email,
                password : form.password,
                password_confirm : form.passwordConfirm,
            });
            setForm({...form, loading: false});
            setRedirect(true);
        }catch(e){
            setForm({
                ...form,
                loading: false,
                error: e.response.data.errors
            });
        }
    }

    return (
        <BaseLayout pageTitle='signup' pageDescription='admin signup page'>
            <div className='page-container'>
                <main className="form-signin">
                    <form onSubmit={submitRegisterFormHandler}>
                        <img className="mb-4" src="/vercel.svg" alt="react-admin-logo" width="80" height="80"/>
                            <h1 className="h3 mb-3 fw-normal">Please register</h1>
                            <div className="form-floating">
                                <input type="text" name='firstName' onChange={inputChangeHandler} className={`form-control ${form.error && form.error.first_name? 'is-invalid': ''}`} id="firstName" placeholder="first name" />
                                <label htmlFor="firstName">First name</label>
                                {form.error && form.error.first_name && <span className='invalid-feedback'>{form.error.first_name}</span>}
                            </div>
                            <div className="form-floating">
                                <input type="text" name='lastName' className={`form-control ${form.error && form.error.last_name? 'is-invalid': ''}`} onChange={inputChangeHandler} id="lastName" placeholder="last name" />
                                <label htmlFor="lastName">Last name</label>
                                {form.error && form.error.last_name && <span className='invalid-feedback'>{form.error.last_name}</span>}
                            </div>

                            <div className="form-floating">
                                <input type="email" name='email' className={`form-control ${form.error && form.error.email? 'is-invalid': ''}`} onChange={inputChangeHandler} id="email" placeholder="name@example.com" />
                                <label htmlFor="email">Email address</label>
                                {form.error && form.error.email && <span className='invalid-feedback'>{form.error.email}</span>}
                            </div>

                            <div className="form-floating">
                                <input type="password" name='password' className={`form-control ${form.error && form.error.password? 'is-invalid': ''}`} onChange={inputChangeHandler} id="password" placeholder="Password" />
                                <label htmlFor="password">Password</label>
                                {form.error && form.error.password && <span className='invalid-feedback'>{form.error.password}</span>}
                            </div>

                            <div className="form-floating">
                                <input type="password" name='passwordConfirm' className={`form-control ${form.error && form.error.password_confirm? 'is-invalid': ''}`} onChange={inputChangeHandler} id="passwordConfirm" placeholder="Password" />
                                <label htmlFor="passwordConfirm">Confirm password</label>
                                {form.error && form.error.password_confirm && <span className='invalid-feedback'>{form.error.password_confirm}</span>}
                            </div>

                            <button className="w-100 btn btn-lg btn-primary" type="submit" disabled={form.loading}>
                                {form.loading ? 
                                    <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    <span className="ml-3">Signing up...</span></>   
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



export default Register;
